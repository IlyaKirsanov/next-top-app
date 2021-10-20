import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from './Header.module.css';
import Logo from '../../public/icons/logo.svg';
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
			<ButtonIcon icon="menu" appearance="white"/>
		</header>
	);
};
