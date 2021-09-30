import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select'
import './index.scss'
const DropDown = forwardRef((props, ref) => {
	const [message, setMessage] = useState('')
	const [error, setError] = useState(false)
	useImperativeHandle(ref, () => ({
		showError: (message) => showError(message),
		hideError: () => hideError(),
	}))
	const showError = (message = '') => {
		setError(true)
		setMessage(message)
	}

	const hideError = () => {
		setError(false)
		setMessage('')
	}
	return (
		<>
			<Form.Label>{props.title}</Form.Label>
			<Select options={props.options} onChange={props.onChange} />
			{error ? <Form.Text className="text_error">{message}</Form.Text> : null}
		</>
	)
})

export default DropDown
