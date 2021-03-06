import { TextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";
import cn from "classnames";
import React, { ForwardedRef } from "react";

export const TextArea = React.forwardRef(
	(
		{ className, error, ...props }: TextAreaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles.textareaWrapper)}>
				<textarea
					ref={ref}
					className={cn(styles.textarea, {
						[styles.error]: error,
					})}
					{...props}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
