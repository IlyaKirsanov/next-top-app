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

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	
	
	return (
		<>
			<div className={ cn(styles.reviewForm, className) }  { ...props }>
				<Input placeholder="Имя"/>
				<Input placeholder="Заголовок отзыва" className={styles.title}/>
				<div className={ styles.rating }>
					<span>Оценка: </span>
					<Rating rating={ 0 }/>
				</div>
				<TextArea placeholder="Текст отзыва" className={ styles.description }/>
				<div className={ styles.submit }>
					<Button appearance="primary">Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Отзыв отправлен</div>
				<div>Спасибо за Ваш отзыв</div>
				<CloseIcon className={styles.close}/>
			</div>
		</>
		
	);
};