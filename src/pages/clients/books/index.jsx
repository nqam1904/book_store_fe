import React, { useEffect } from 'react'
import { HeaderClient, CardItem } from 'components'

import { Breadcrumb } from 'react-bootstrap'
import FlipMove from 'react-flip-move'
import Search from './Search'
import './index.scss'
import { listBookSelector } from 'redux/selectores/bookSelector'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getListBookAction } from 'redux/actions/bookAction'
import { images } from 'assets/images'

const Books = () => {
	const dispatch = useDispatch()
	const data = useSelector(listBookSelector)
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])

	const listBook = data.map((item) => {
		return (
			<FlipMove
				duration={300}
				staggerDelayBy={150}
				appearAnimation="accordionVertical"
				enterAnimation="fade"
				leaveAnimation="fade"
				key={item.id}>
				<CardItem
					title={item.title}
					text={item.author}
					// image={images.loader_img}
					pdf={item.images[1].key}
				/>
			</FlipMove>
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
