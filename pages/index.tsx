import { MainLayout } from '@/components/layout'
import { HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { FeaturesWorks } from '@/components/home/featured-works'

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
      <FeaturesWorks />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
