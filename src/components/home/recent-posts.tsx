import { IPost } from '@/models'
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'
import { PostCard } from './post-card'

export function RecentPosts() {
  const postList: IPost[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      publishedDate: 1656000666,
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Making a design system from scratch',
      publishedDate: 1656990666,
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]

  return (
    <Box component="section" bgcolor={'secondary.light'} pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Recent Posts</Typography>
          <Link href={'/blog'} passHref>
            <MuiLink>View all</MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map(post => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
