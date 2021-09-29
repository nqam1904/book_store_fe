export const GET_LIST_BOOK = 'GET_LIST_BOOK'
export const getListBookAction = () => {
	return {
		type: GET_LIST_BOOK,
	}
}
export const GET_LIST_BOOK_SUCCESS = 'GET_LIST_BOOK_SUCCESS'
export const getListBookSuccess = (payload) => {
	return {
		type: GET_LIST_BOOK_SUCCESS,
		payload,
	}
}
