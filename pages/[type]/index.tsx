import Link from 'next/link';
import { withLayout } from '../../layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MenuItem } from '../../interface/menu.interface';
import axios from 'axios';
import { firstLevelMenu } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'querystring';
import { API } from '../../helpers/api';

function Type({firstCategory}: TypeProps): JSX.Element {
	return (
		<div>

			<Link href="/">
				<a>{firstCategory}</a>
			</Link>

		</div>
	);
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(menuItem => `/${menuItem.route}`),
		fallback: true
	};
};


export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

	if (!params) {
		return {
			notFound: true
		}
	}

	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });

	return {
		props: {
			firstCategory: firstCategoryItem.id,
			menu
		}
	};
};

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}