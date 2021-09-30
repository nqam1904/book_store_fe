import { createAction } from '@reduxjs/toolkit'

export const GET_LIST_BOOK = 'GET_LIST_BOOK'
export const getListBookAction = createAction(GET_LIST_BOOK)
export const GET_LIST_BOOK_SUCCESS = 'GET_LIST_BOOK_SUCCESS'
export const getListBookSuccess = createAction(GET_LIST_BOOK_SUCCESS)
//******************** */
export const CREATE_BOOK = 'CREATE_BOOK'
export const createBookAction = createAction(CREATE_BOOK)
//******************** */
export const DELETE_BOOK = 'DELETE_BOOK'
export const deleteBookAction = createAction(DELETE_BOOK)
//******************** */
export const GET_LIST_CATEGORY = 'GET_LIST_CATEGORY'
export const getListCategoryAction = createAction(GET_LIST_CATEGORY)

export const GET_LIST_CATEGORY_SUCCESS = 'GET_LIST_CATEGORY_SUCCESS'
export const getListCategorySuccess = createAction(GET_LIST_CATEGORY_SUCCESS)
//******************** */
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const createCategoryAction = createAction(CREATE_CATEGORY)
//******************** */
export const EDIT_CATEGORY = 'EDIT_CATEGORY'
export const editCategoryAction = createAction(EDIT_CATEGORY)
//******************** */
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const deleteCategoryAction = createAction(DELETE_CATEGORY)
