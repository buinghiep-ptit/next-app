import { ILayoutProps } from '@/models/index'
import { useAuth } from 'hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Auth } from '../common'

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: ILayoutProps) {
  const { profile, logout } = useAuth()
  const router = useRouter()

  async function handleClickLogout() {
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div className="sidebar">SideBar</div>
      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={handleClickLogout}>Logout</button>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
      <div>{children}</div>
    </Auth>
  )
}
