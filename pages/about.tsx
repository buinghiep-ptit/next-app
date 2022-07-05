import { Header } from '@/components/common'
import { AdminLayout } from '@/components/layout'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// const DynamicHeader = dynamic(() => import('@/component/common').then((m) => m.Header), {
// 	ssr: true,
// })
export default function AboutPage() {
  const [postList, setPostList] = useState([])
  const router = useRouter()

  console.log('About query:', router.query)

  const page = router.query?.page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`,
      )
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
      { shallow: true },
    )
  }

  return (
    <Box sx={{ bgcolor: 'primary.light' }} color="text.primary">
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>

      <Button variant="contained" color="success" sx={{ p: 2 }}>
        Testing
      </Button>
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
