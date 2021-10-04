import React, { useEffect } from 'react'
import { HeaderClient, CardItem } from 'components'

import { Breadcrumb } from 'react-bootstrap'
import Search from './Search'
import './index.scss'
import { listBookSelector } from 'redux/selectores/bookSelector'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getListBookAction } from 'redux/actions/bookAction'

const Books = () => {
	const dispatch = useDispatch()
	const data = useSelector(listBookSelector)
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])

	const listBook = data.map((item, index) => {
		return (
			<CardItem
				key={index}
				title={item.title}
				text={item.author}
				image={item.images[0]?.key}
				pdf={item.images[1]?.key}
			/>
		)
	})
	return (
		<>
			<HeaderClient />
			<div className="container">
				<br />
				{/* Breadcrumb */}
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>Books</Breadcrumb.Item>
				</Breadcrumb>

				<Search />

				{/*List Book */}
				<br />
				<div className="books-list">{listBook}</div>
			</div>
		</>
	)
}

export default Books
