import { BlogItem } from '@/components/common/blog'
import { MainLayout } from '@/components/layout'
import { IBlog } from '@/models/blog'
import { getBlogList } from '@/utils/blog'
import { Container, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface IBlogListPage {
  blogs: IBlog[]
}

export default function BlogListPage({ blogs }: IBlogListPage) {
  console.log('blogs:', blogs)
  return (
    <Box>
      <Container>
        <Typography variant="h4" fontWeight="bold">
          Blog List
        </Typography>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {blogs.map(blog => (
            <li key={blog.id}>
              <Link href={`/posts/${blog.id}`}>
                <a>
                  <BlogItem blog={blog} />
                </a>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

BlogListPage.Layout = MainLayout

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
