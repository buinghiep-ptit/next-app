import { authApi } from '@/api'
import React from 'react'

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
	const handleLoginClick = async () => {
		try {
			await authApi.login({
				username: 'nghiepbv2',
				password: '20121991',
			})
		} catch (error) {
			console.log('failed to login: ', error)
		}
	}
	const handleGetProfileClick = async () => {
		try {
			await authApi.getProfile()
		} catch (error) {
			console.log('failed to get profile: ', error)
		}
	}
	const handleLogoutClick = async () => {
		try {
			await authApi.logout()
		} catch (error) {
			console.log('failed to logout: ', error)
		}
	}

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handleGetProfileClick}>Get Profile</button>
			<button onClick={handleLogoutClick}>Logout</button>
		</div>
	)
}
