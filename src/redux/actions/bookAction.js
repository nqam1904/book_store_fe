import { createAction } from '@reduxjs/toolkit'

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
export const CREATE_BOOK = 'CREATE_BOOK'
export const createBookAction = createAction(CREATE_BOOK)
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
//******************** */
export const EDIT_CATEGORY = 'EDIT_CATEGORY'
export const editCategoryAction = (payload) => {
	return {
		type: EDIT_CATEGORY,
		payload,
	}
}
//******************** */
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const deleteCategoryAction = (payload) => {
	return {
		type: DELETE_CATEGORY,
		payload,
	}
}
