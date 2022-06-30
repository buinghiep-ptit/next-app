import '../styles/globals.css'
import { EmptyLayout } from '@/component/layout'
import { AppPropsWithLayout } from '@/models/common'
import { SWRConfig } from 'swr'
import axiosClient from 'apis/axios-client'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout
	return (
		<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	)
}

export default MyApp
