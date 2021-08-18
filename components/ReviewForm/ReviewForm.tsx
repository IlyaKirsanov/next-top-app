import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import UserIcon from '../../public/icons/user.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import CloseIcon from '../../public/icons/close.svg'
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

	const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}  {...props}>
				<Input {...register('name', { required: { value: true, message: 'Заполните имя' } })}
					placeholder="Имя"
					error={errors.name} />
				<Input {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					placeholder="Заголовок отзыва"
					className={styles.title}
					error={errors.title} />
				<div className={styles.rating}>
					<span>Оценка: </span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => {
							return <Rating error={errors.rating} isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
						}} />
				</div>
				<TextArea {...register('description', { required: { value: true, message: 'Заполните описание' } })} error={errors.description} placeholder="Текст отзыва" className={styles.description} />
				<div className={styles.submit}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Отзыв отправлен</div>
				<div>Спасибо за Ваш отзыв</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>

	);
};