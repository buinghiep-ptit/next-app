import { MainLayout } from '@/components/layout'
import { HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { FeaturesWorks } from '@/components/home/featured-works'
import { Seo } from '@/components/common/seo'

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
      <Seo
        data={{
          title: 'NextJS | Nghiepbv',
          url: 'https://next-app-pink-six.vercel.app/',
          description: 'Simple Step by step building website using nextjs',
          thumbnailUrl:
            'https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeaturesWorks />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
