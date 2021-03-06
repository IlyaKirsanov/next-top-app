import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Devider } from '../Devider/Devider';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({
	product, className, ...props
}: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

	const reviewRef = useRef<HTMLDivElement>(null);

	const variants = {
		visible: { opacity: 1, height: 'auto' },
		hidden: { opacity: 0, height: 0 }
	};

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<img
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}          // layout='responsive' // objectFit="cover"
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceRu(product.price)} {product.oldPrice &&
				<Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
				</div>
				<div className={styles.credit}>
					{priceRu(product.credit)}/<span className={styles.month}>мес</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg ?? product.initialRating} /></div>
				<div className={styles.tags}>{product.categories.map(c => (
					<Tag key={c} className={styles.category} color="ghost">{c}</Tag>))}
				</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>кредит</div>
				<div
					className={styles.rateTitle}>
					<a
						href="#ref"
						onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
				</div>
				<Devider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots} />
							<span className={styles.characteristicValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>} {product.disadvantages &&
				<div className={styles.disadvantages}>
					<div>Недостатки</div>
					<div>{product.disadvantages}</div>
				</div>}
				</div>
				<Devider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance="primary">Узнать больше</Button> <Button
					appearance="ghost"
					arrow={isReviewOpened ? 'down' : 'right'}
					className={styles.reviewBtn}
					onClick={() => setIsReviewOpened(!isReviewOpened)}
				>Читать отзывы</Button>
				</div>
			</Card>
			<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
				<Card
					ref={reviewRef} color="blue" className={styles.reviews}
				>
					{product.reviews.map(r => {
						return (
							<div key={r._id}>
								<Review review={r} /> <Devider />
							</div>
						);
					})}
					<ReviewForm productId={product._id} />
				</Card>
			</motion.div>
		</div>

	);
}));
