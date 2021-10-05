import axiosClient from './axiosClient'

const blogApi = {
	/**
	 * Get all book
	 */
	getAll() {
		const url = '/blog'
		return axiosClient.get(url)
	},
	/**
	 * Get one book
	 */
	getOne(id) {
		const url = `/blog/${id}`
		return axiosClient.get(url)
	},
	/**
	 * add book
	 */
	add(data) {
		const url = `/blog`
		console.log(data)
		return axiosClient.post(url, data)
	},
	/**
	 * update book
	 */
	update(data) {
		const url = `/blog/${data?.id}`
		return axiosClient.put(url, data)
	},
	/**
	 * delete book
	 */
	remove(id) {
		const url = `/blog/${id}`
		return axiosClient.delete(url)
	},
}
export default blogApi
