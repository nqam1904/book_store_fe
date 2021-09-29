import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import debounce from 'lodash/debounce'
import './index.scss'
const Search = ({ query }) => {
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
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="text"
						onChange={onInputChange}
						placeholder="Clean Code, React Native ..."
					/>
					<Form.Text className="text-muted">Search programming books</Form.Text>
				</Form.Group>
				<Button variant="primary" type="submit">
					Search
				</Button>
			</Form>
		</div>
	)
}

export default Search
