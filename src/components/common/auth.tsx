import { IUserInfo } from '@/models/auth'
import { useAuth } from 'hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
export interface IAuthProps {
	children?: any
}

export function Auth({ children }: IAuthProps) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile?.username) router.push('/login')
	}, [router, profile, firstLoading])

	if (!profile?.username)
		return (
			<>
				<p>Loading..</p>
			</>
		)
	return <div>{children}</div>
}
