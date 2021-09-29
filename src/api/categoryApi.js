import axiosClient from './axiosClient'

const categoryAPi = {
	/**
	 * Get all category
	 */
	getAll() {
		const url = '/categories'
		return axiosClient.get(url)
	},
	/**
	 * Get one category
	 */
	getOne(id) {
		const url = `/categories/${id}`
		return axiosClient.get(url)
	},
	/**
	 * add category
	 */
	add(data) {
		const url = `/categories`
		return axiosClient.post(url, data)
	},
	/**
	 * update category
	 */
	update(data) {
		const url = `/categories/${data?.id}`
		return axiosClient.put(url, data)
	},
	/**
	 * delete category
	 */
	remove(id) {
		const url = `/categories/${id}`
		return axiosClient.delete(url)
	},
}
export default categoryAPi
