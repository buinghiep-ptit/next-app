import { authApi } from 'apis'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 3600 * 1000,
		revalidateOnFocus: false,
		...options,
	})

	async function login() {
		await authApi.login({
			username: 'nghiepbv2',
			password: '20121991',
		})

		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate({}, false)
	}

	return {
		profile,
		error,
		login,
		logout,
	}
}
