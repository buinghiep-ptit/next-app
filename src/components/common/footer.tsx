import { Box } from '@mui/material'
import React from 'react'

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box component="footer" py={2} textAlign="center">
      Footer
    </Box>
  )
}
