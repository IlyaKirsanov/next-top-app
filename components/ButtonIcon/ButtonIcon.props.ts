import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from '../../public/icons/up.svg';
import close from '../../public/icons/cross.svg';
import menu from '../../public/icons/mob-menu.svg';

export const icons = {
	up,
	close,
	menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement> {
	icon: IconName;
	appearance: "primary" | "white";
}
