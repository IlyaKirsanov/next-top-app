import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({
	size = "medium",
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={cn(className, styles.p, {
				[styles.small]: size === "small",
				[styles.medium]: size === "medium",
				[styles.large]: size === "large",
			})}
			{...props}
		>
			{children}
		</p>
	);
};
