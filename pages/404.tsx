import { Htag } from "../components";
import { withLayout } from "../layout/Layout";

const Error404 = (): JSX.Element => {
	return (
		<>
			<Htag tag="h1">404</Htag>
		</>
	);
};

export default withLayout(Error404);
