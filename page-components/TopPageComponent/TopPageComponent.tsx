import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Card, Htag, Tag } from '../../components';
import { HhData } from '../../components/HhData/HhData';
import { TopLevelCategory } from '../../interface/page.interface';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && <Tag color="gray" size="medium">{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map(p => <div key={p._id}>{p.title}</div>)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag color="red" size="medium">hh.ua</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
		</div>
	);
};