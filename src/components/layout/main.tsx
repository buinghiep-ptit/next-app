import { Footer, Header } from '@/component/common'
import { ILayoutProps } from '@/models/index'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'

export interface IMainLayoutProps {}

export function MainLayout({ children }: ILayoutProps) {
  useEffect(() => {
    console.log('MainLayout mounting')

    return () => console.log('MainLayout un-mounting')
  }, [])
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {/* <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/blog'}>
          <a>Blog</a>
        </Link>
        <Link href={'/works'}>
          <a>Works</a>
        </Link> */}
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
