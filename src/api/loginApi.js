import axiosClient from './axiosClient'

const loginApi = {
	/**
	 * login system admin
	 */
	login(data) {
		const url = '/auth/login'
		return axiosClient.post(url, data)
	},
	discord(code) {
		const url = `/auth/discord?code=${code}`
		return axiosClient.get(url)
	},
}

export default loginApi
