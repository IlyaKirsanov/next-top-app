import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';


function Home(): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">{rating}</Htag>
			<Button appearance="primary" arrow="right">Кнопка</Button>
			<Button appearance="ghost" arrow="down">Кнопка2</Button>
			<P size="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis magni qui incidunt impedit est officia sequi.</P>
			<P size="medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis magni qui incidunt impedit est officia sequi.</P>
			<P size="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis magni qui incidunt impedit est officia sequi.</P>
			<Tag color="red" size="small" href="#">Medium</Tag>
			<Tag color="primary" size="medium" href="#">Medium</Tag>
			<Tag color="green" size="small" href="#">Medium</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</>
	);
}

export default withLayout(Home)