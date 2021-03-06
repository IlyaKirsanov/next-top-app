import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, HhData, Advantages, Sort, Product } from '../../components';
import { TopLevelCategory } from '../../interface/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import React, { useReducer, useEffect} from 'react';
import { sortReducer } from '../../components/Sort/sort.reducer';
import { useScrollY } from "../../hooks/useScrollY";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

	const y = useScrollY();

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	useEffect(()=>{
		dispatchSort({type: 'reset', initialState: products});
	}, [products]);

	return (page ?
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page && page.title}</Htag>
				{products && <Tag color='gray' size='medium'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p} />))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='medium'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущства</Htag>
				<Advantages advantages={page.advantages} />
			</>
			}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div> : <div/>
		);
};
