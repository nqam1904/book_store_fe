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

//******************** */
export const GET_LIST_CATEGORY = 'GET_LIST_CATEGORY'
export const getListCategoryAction = () => {
	return {
		type: GET_LIST_CATEGORY,
	}
}

export const GET_LIST_CATEGORY_SUCCESS = 'GET_LIST_CATEGORY_SUCCESS'
export const getListCategorySuccess = (payload) => {
	return {
		type: GET_LIST_CATEGORY_SUCCESS,
		payload,
	}
}
//******************** */
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const createCategoryAction = (payload) => {
	return {
		type: CREATE_CATEGORY,
		payload,
	}
}
