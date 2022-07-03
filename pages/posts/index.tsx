import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface IPostListPage {
  posts: any[]
}

export default function PostListPage({ posts }: IPostListPage) {
  console.log('posts:', posts)
  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const getStaticProps: GetStaticProps<IPostListPage> = async (
  context: GetStaticPropsContext,
) => {
  //server side - run build time
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1',
  )
  const data = await response.json()

  return {
    props: {
      posts: data.data.map((p: any) => ({
        id: p.id,
        title: p.title,
      })),
    },
  }
}
