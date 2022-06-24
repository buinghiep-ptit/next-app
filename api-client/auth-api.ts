import { ILoginPayload } from '@/models/index'
import axiosClient from './axios-client'

export const authApi = {
	login(payload: ILoginPayload) {
		return axiosClient.post('/login', payload)
	},
	logout() {
		return axiosClient.post('/logout')
	},
	getProfile() {
		return axiosClient.get('/profile')
	},
}
