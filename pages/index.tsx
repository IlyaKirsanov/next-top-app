import { Htag, Button, P } from '../components';


export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">Кнопка</Button>
			<Button appearance="ghost" arrow="down">Кнопка2</Button>
			<P size="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis magni qui incidunt impedit est officia sequi.</P>
			<P size="medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis magni qui incidunt impedit est officia sequi.</P>
			<P size="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro soluta consectetur corporis magni qui incidunt impedit est officia sequi.</P>
		</>
	);
}
