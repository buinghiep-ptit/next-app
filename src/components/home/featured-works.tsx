import { WorkList } from '@/components/common/work'
import { IWork } from '@/models'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export function FeaturesWorks() {
  const workList: IWork[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      thumbnailUrl:
        'https://res.cloudinary.com/dbh0lx8um/image/upload/v1657006864/my-next-js/img1_f1qrv6.jpg',
      createdAt: 1656000666,
      updatedAt: 1656000666,
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',

      fullDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      thumbnailUrl:
        'https://res.cloudinary.com/dbh0lx8um/image/upload/v1657006864/my-next-js/img3_occiy6.jpg',
      createdAt: 1656990666,
      updatedAt: 1656990666,
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      thumbnailUrl:
        'https://res.cloudinary.com/dbh0lx8um/image/upload/v1657006865/my-next-js/img2_eefs3g.jpg',
      createdAt: 1656990666,
      updatedAt: 1656990666,
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h6" mb={4}>
          Features Works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
