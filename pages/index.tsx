import { MainLayout } from '@/component/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPageWithLayout = () => {
  const x = 'add'
  console.log(x)
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

  return (
    <Box>
      Home Page
      <img src="" alt="" />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
