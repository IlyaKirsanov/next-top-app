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
import { IReviewForm, IReviewSentRespons } from "./ReviewForm.interface";
import axios from "axios";
import { API } from '../../helpers/api';
import { useState } from "react";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

	const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [error, setError] = useState<string>()


	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentRespons>(API.review.createDemo, { ...formData, productId });
			if (data.message) {
				setIsSuccess(true)
				reset()
			} else {
				setError('Что-то пошло не так')
			}
		} catch (e) {
			setError(e.message)
		}
	};

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
			{isSuccess && <div className={cn(styles.panel, styles.success)}>
				<div className={styles.successTitle}>Отзыв отправлен</div>
				<div>Спасибо за Ваш отзыв</div>
				<CloseIcon className={styles.close} onClick={()=>{setIsSuccess(false)}}/>
			</div>}

			{error && <div className={cn(styles.panel, styles.error)}>
				<div>{error}</div>
				<CloseIcon className={styles.close} onClick={()=>{setError(undefined)}}/>
			</div>}
		</form>

	);
};