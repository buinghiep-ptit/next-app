import { MainLayout } from '@/components/layout'
import { HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { FeaturesWorks } from '@/components/home/featured-works'
import { Seo } from '@/components/common/seo'

import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
  UseQueryResult,
} from 'react-query'
import { fetchPerson, postsApi } from '@/api-client'
import { IPost } from '@/models'
import { GetStaticProps } from 'next'

const Home: NextPageWithLayout = ({}) => {
  const router = useRouter()

  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
  }: UseQueryResult<IPost[], Error> = useQuery<IPost[], Error>(
    ['posts'],
    fetchPerson,
  )

  function goToDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    })
  }

  console.log(isLoading, isFetching, data?.length)

  if (isLoading) return <h1>Loading...</h1>

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

export const getStaticProps: GetStaticProps<any> = async (): Promise<{
  props: {
    dehydratedState: DehydratedState
  }
}> => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['posts'], fetchPerson)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

Home.Layout = MainLayout
export default Home
