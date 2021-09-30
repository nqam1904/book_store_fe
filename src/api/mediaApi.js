import axiosClient from './axiosClient'

const mediaApi = {
	/**
	 * upload file
	 */
	upload(data) {
		const url = '/media'
		let bodyFormData = new FormData()
		for (const file of data) {
			bodyFormData.append('files', file)
		}

		return axiosClient.post(url, bodyFormData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}

export default mediaApi
