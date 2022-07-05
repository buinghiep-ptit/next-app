import { authApi } from '@/api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'
import { IUserInfo } from '@/models'

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

  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authApi.login({
      username: 'nghiepbv2',
      password: '20121991',
    })

    await mutate()
  }

  async function logout() {
    await authApi.logout()
    mutate({} || null, false)
  }

  return {
    profile: profile as IUserInfo,
    error,
    login,
    logout,
    firstLoading,
  }
}
