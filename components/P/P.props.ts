import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface PProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: "large" | "medium" | "small";
	children: ReactNode;
}
