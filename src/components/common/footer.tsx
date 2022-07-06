import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Icon, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://facebook.com',
    },
    {
      icon: Instagram,
      url: 'https://google.com',
    },
    {
      icon: Twitter,
      url: 'https://instagram.com',
    },
    {
      icon: LinkedIn,
      url: 'https:facebook.com',
    },
  ]
  return (
    <Box component="footer" py={4} textAlign="center">
      <Stack direction="row" spacing={4} justifyContent="center" pb={2}>
        {socialLinks.map((item, index) => (
          <Box
            key={index}
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  )
}
