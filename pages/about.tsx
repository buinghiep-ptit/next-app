import { AdminLayout, MainLayout } from '@/component/layout'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { GifBox } from '@mui/icons-material'
const Header = dynamic(() => import('@/component/common/header'), { ssr: true })

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
	const [postList, setPostList] = useState([])
	const router = useRouter()

	console.log('About query: ', router.query)

	const page = router.query?.page

	useEffect(() => {
		if (!page) return
		;(async () => {
			const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
			const data = await response.json()

			setPostList(data.data)
		})()
	}, [page])

	const handleNextClick = () => {
		router.push(
			{
				pathname: '/about',
				query: {
					page: (Number(page) || 1) + 1,
				},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About Page
			</Typography>
			<Header />
			<ul className="post-list">
				{postList.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>

			<button onClick={handleNextClick}>Next Page</button>
		</Box>
	)
}

AboutPage.Layout = AdminLayout

export const getStaticProps = async () => {
	console.log('getStaticProps')
	return {
		props: {},
	}
}

// export async function getServerSideProps() {
// 	return {
// 		props: {},
// 	};
// }
