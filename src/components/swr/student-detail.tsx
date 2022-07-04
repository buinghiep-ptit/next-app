import React from 'react'
import useSWR from 'swr'
export interface IStudentDetailProps {
  studentId?: string | number
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000

export function StudentDetail({ studentId }: IStudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false,
      dedupingInterval: MILLISECOND_PER_HOUR,
    },
  )

  const handleMutateClick = () => {
    mutate({ name: 'Nghiepbv' })
  }

  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  )
}
