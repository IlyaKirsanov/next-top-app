import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Next top app</title>
				<link key={1} rel="icon" href="./favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>
				<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
				<meta property="og:locale" content="ru_RU"/>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
