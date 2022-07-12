import { postsApi } from '@/api-client'
import * as React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export default function StudentListPage() {
  const { data, isLoading, isFetching } = useQuery(
    ['students'],
    postsApi.getPosts,
  )

  console.log(isLoading, isFetching, data)

  if (isLoading) return <h1>Loading...</h1>
  return <div>StudentPage</div>
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['students'], postsApi.getPosts)
  console.log('queryClient:', queryClient)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
