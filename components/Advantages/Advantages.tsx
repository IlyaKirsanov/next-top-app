import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import cn from 'classnames';
import CheckIcon from '../../public/icons/check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {

	return (
		<>
			{advantages.map(a=> {
				return (
					<div key={a._id} className={styles.advantage}>
						<CheckIcon/>
						<div className={styles.title}>{a.title}</div>
						<hr className={styles.vline}/>
						<div className={styles.description}>{a.description}</div>
					</div>
				)
			})}
		</>
	);
};