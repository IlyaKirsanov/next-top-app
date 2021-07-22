import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface PProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: "medium" | "small";
	children: ReactNode;
	color?: "ghost" | "red" | "gray" | "green" | "primary";
	href?: string;
}
