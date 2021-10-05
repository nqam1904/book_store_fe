import React, { useEffect } from 'react'
import { HeaderClient, CardItem } from 'components'

import { Breadcrumb } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import debounce from 'lodash/debounce'
import Search from './Search'
import './index.scss'
import { listBookSelector } from 'redux/selectores/bookSelector'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getListBookAction } from 'redux/actions/bookAction'
import { useState } from 'react'

const Books = () => {
	const dispatch = useDispatch()
	const data = useSelector(listBookSelector)
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])
	const [value, setValue] = useState('')
	const handleOnSubmit = (e) => {
		e.preventDefault()
	}

	const onInputChange = (e) => {
		setValue(e.target.value)
	}
	const listBook = data.map((item, index) => {
		if (!value) {
			return (
				<CardItem
					title={item.title}
					text={item.author}
					image={item.images[0]?.key}
					pdf={item.images[1]?.key}
				/>
			)
		} else if (item.title.toLowerCase().match(value.toLowerCase())) {
			return (
				<CardItem
					title={item.title}
					text={item.author}
					image={item.images[0]?.key}
					pdf={item.images[1]?.key}
				/>
			)
		}
		return <></>
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

				<div className="search-books">
					<Form className="search-books--form" onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Control
								type="text"
								onChange={onInputChange}
								placeholder="Clean Code, React Native ..."
								value={value}
							/>
							<Form.Text className="text-muted">Search programming books</Form.Text>
						</Form.Group>
					</Form>
				</div>

				{/*List Book */}
				<br />
				<div className="books-list">{listBook}</div>
			</div>
		</>
	)
}

export default Books
