import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Card, Htag, Tag, HhData, Advantages, P } from '../../components';
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
			{firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag="h2">Преимущество</Htag>
				<Advantages advantages={page.advantages} />
			</>}
			{page.seoText && <P>{page.seoText}</P>}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
		</div>
	);
};