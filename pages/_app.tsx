import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Next top app</title>
				<link key={1} rel="icon" href="./favicon.ico" />
			</Head>

			<Component {...pageProps} />;
		</>);
}

export default MyApp;
