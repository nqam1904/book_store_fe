import { createAction } from '@reduxjs/toolkit'

export const GET_LIST_BLOG = 'GET_LIST_BLOG'
export const getListBlogAction = createAction(GET_LIST_BLOG)
export const GET_LIST_BLOG_SUCCESS = 'GET_LIST_BLOG_SUCCESS'
export const getListBlogSuccess = createAction(GET_LIST_BLOG_SUCCESS)
//******************** */
export const CREATE_BLOG = 'CREATE_BLOG'
export const createBlogAction = createAction(CREATE_BLOG)
//******************** */
export const UPDATE_BLOG = 'UPDATE_BLOG'
export const updateBlogAction = createAction(UPDATE_BLOG)
//******************** */
export const DELETE_BLOG = 'DELETE_BLOG'
export const deleteBlogAction = createAction(DELETE_BLOG)
//******************** */
