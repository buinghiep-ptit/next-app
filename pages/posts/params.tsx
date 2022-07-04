import { useRouter } from 'next/router'
import React from 'react'

export default function PostDetailParamsPage() {
  const router = useRouter()

  return (
    <div>
      <h1>PostDetail Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}
