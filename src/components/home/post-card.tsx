import { IPost } from '@/models'
import { Card, CardContent, Divider, Typography } from '@mui/material'
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
          {post.title}
        </Typography>
        <Typography variant="body1" my={2} sx={{ display: 'flex' }}>
          {format((post.publishedDate ?? 0) * 1000, 'dd MMM yyyy')}
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          {post.tagList?.join(', ')}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
