import axiosClient from './axiosClient'

const mediaApi = {
	/**
	 * upload file
	 */
	upload(data) {
		const url = '/media'
		let bodyFormData = new FormData()
		bodyFormData.append('files', data)
		console.log(data, 'api')
		return axiosClient.post(url, bodyFormData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}

export default mediaApi
