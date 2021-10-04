import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import debounce from 'lodash/debounce'
import './index.scss'
import { useState } from 'react'
const Search = ({ query }) => {
	const [value, setValue] = useState('')
	const handleOnSubmit = (e) => {
		e.preventDefault()
	}
	const debouncedGetBooks = debounce((query) => {}, 700)

	const onInputChange = (e) => {
		debouncedGetBooks(e.target.value)
	}

	return (
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
			<div className="d-grid gap-2">
				<Button variant="primary" type="submit">
					Search
				</Button>
			</div>
		</div>
	)
}

export default Search
