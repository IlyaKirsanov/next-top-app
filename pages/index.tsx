import { useState } from 'react'
import { Htag, Button, P, Tag, Rating, Input, TextArea } from '../components'
import { withLayout } from '../layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '../interface/menu.interface'
import { API } from '../helpers/api'


function Home({ menu }: HomeProps): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">{rating}</Htag>
			<Button appearance="primary" arrow="right">Кнопка</Button>
			<Button appearance="ghost" arrow="down">Кнопка2</Button>
			<P size="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis
				magni qui incidunt impedit est officia sequi.</P>
			<P size="medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur
				corporis
				magni qui incidunt impedit est officia sequi.</P>
			<P size="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis
				magni qui incidunt impedit est officia sequi.</P>
			<Tag color="red" size="small" href="#">Medium</Tag>
			<Tag color="primary" size="medium" href="#">Medium</Tag>
			<Tag color="green" size="small" href="#">Medium</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder="Test" />
			<TextArea placeholder="Test" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(
		API.topPage.find,
		{ firstCategory });
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}