import { PProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
	size = "medium",
	color = "ghost",
	href,
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<div
			className={cn(className, styles.tag, {
				[styles.small]: size === "small",
				[styles.medium]: size === "medium",
				[styles.ghost]: color === "ghost",
				[styles.red]: color === "red",
				[styles.gray]: color === "gray",
				[styles.green]: color === "green",
				[styles.primary]: color === "primary",
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
