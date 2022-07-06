import { IBlog } from '@/models/blog'
import { Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { format } from 'date-fns'
import * as React from 'react'

export interface IBlogItemProps {
  blog: IBlog
}

export function BlogItem({ blog }: IBlogItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {blog?.title}
      </Typography>
      <Stack direction="row" my={2}>
        <Typography variant="body1">
          {format((blog?.publishedDate ?? 0) * 1000, 'dd MMM yyyy')}
        </Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1">{blog.tagList?.join(', ')}</Typography>
      </Stack>

      <Typography variant="body2">{blog?.description}</Typography>
    </Box>
  )
}
