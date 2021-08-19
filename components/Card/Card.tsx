import React, { ForwardedRef } from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = React.forwardRef((
	{ color = "white", children, className, ...props }: CardProps,
	ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div ref={ref} className={cn(styles.card, className, {
			[styles.blue]: color === 'blue'
		})}
			{...props}>
			{children}
		</div>
	);
}
);