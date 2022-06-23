import '../styles/globals.css';
import { EmptyLayout } from '@/component/layout';
import { AppPropsWithLayout } from '@/models/common';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
