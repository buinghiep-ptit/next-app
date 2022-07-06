import { IBlog } from '@/models/blog'
import { getBlogList } from '@/utils/blog'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface IBlogListPage {
  blogs: IBlog[]
}

export default function BlogListPage({ blogs }: IBlogListPage) {
  console.log('blogs:', blogs)
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/posts/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const getStaticProps: GetStaticProps<IBlogListPage> = async (
  context: GetStaticPropsContext,
) => {
  //server side - run build time
  const blogList = await getBlogList()

  return {
    props: {
      blogs: blogList,
    },
  }
}
