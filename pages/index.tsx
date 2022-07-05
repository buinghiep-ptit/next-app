import { MainLayout } from '@/component/layout'
import { HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

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
      <HeroSection />
      <RecentPosts />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
