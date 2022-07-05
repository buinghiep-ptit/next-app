import { IPost } from '@/models'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { format } from 'date-fns'

export interface IPostCardProps {
  post?: IPost
}

export function PostCard({ post }: IPostCardProps) {
  if (!post) return null

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post?.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Typography variant="body1">
            {format((post?.publishedDate ?? 0) * 1000, 'dd MMM yyyy')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1">{post.tagList?.join(', ')}</Typography>
        </Stack>

        <Typography variant="body2">{post?.description}</Typography>
      </CardContent>
    </Card>
  )
}
