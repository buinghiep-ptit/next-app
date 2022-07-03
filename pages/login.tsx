import { authApi } from 'apis'
import { useAuth } from 'hooks'
import { useRouter } from 'next/router'
import React from 'react'

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })

  const handleLoginClick = async () => {
    try {
      await login()
      router.push('/about')
      console.log('redirect to dashboard')
    } catch (error) {
      console.log('failed to login: ', error)
    }
  }
  // const handleGetProfileClick = async () => {
  // 	try {
  // 		await authApi.getProfile()
  // 	} catch (error) {
  // 		console.log('failed to get profile: ', error)
  // 	}
  // }
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('failed to logout: ', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  )
}
