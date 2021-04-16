import Layout from 'components/layout/Layout';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/compiled.css';

const _App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default _App;
