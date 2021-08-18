import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './star.svg';
import React, { ForwardedRef } from 'react';

export const Rating = React.forwardRef(({ error, rating, setRating, isEditable = false, ...props }: RatingProps,
	ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((_rating: JSX.Element, idx: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: idx < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => chandeDisplay(idx + 1)}
					onMouseLeave={() => chandeDisplay(rating)}
					onClick={() => onClick(idx + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(idx + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const chandeDisplay = (i: number) => {
		if (!isEditable) return;
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) return;
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code !== 'Space' || !setRating) return;
		setRating(i);
	};

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	return (
		<div {...props} ref={ref} className={cn(styles.ratingWrapper, {
			[styles.error]: error
		})}>
			{ratingArray.map((ratingStar, i) => {
				return <span key={i}>{ratingStar}</span>;
			})}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});