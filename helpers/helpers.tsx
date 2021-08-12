import { FirstLevelMenuItem } from "../interface/menu.interface";
import BooksIcon from '../public/icons/book.svg';
import ProductsIcon from '../public/icons/box.svg';
import ServicesIcon from '../public/icons/cloud.svg';
import CoursesIcon from '../public/icons/hat.svg';
import { TopLevelCategory } from '../interface/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string => price
	.toString()
	.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	.concat(" $");

export const declOfNum = (num: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
};