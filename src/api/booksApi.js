import axiosClient from './axiosClient'

const booksApi = {
	/**
	 * Get all book
	 */
	getAll() {
		const url = '/books'
		return axiosClient.get(url)
	},
	/**
	 * Get one book
	 */
	getOne(id) {
		const url = `/books/${id}`
		return axiosClient.get(url)
	},
	/**
	 * add book
	 */
	add(data) {
		const url = `/books`
		return axiosClient.post(url, data)
	},
	/**
	 * update book
	 */
	update(data) {
		const url = `/books/${data?.id}`
		return axiosClient.put(url, data)
	},
	/**
	 * delete book
	 */
	remove(id) {
		const url = `/books/${id}`
		return axiosClient.delete(url)
	},
}
export default booksApi
