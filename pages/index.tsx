import { MainLayout } from '@/component/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

const Home: NextPageWithLayout = () => {
	const router = useRouter()

	function goToDetailPage() {
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: 123,
				ref: 'social',
			},
		})
	}

	return <Box>Home Page</Box>
}

Home.Layout = MainLayout
export default Home
