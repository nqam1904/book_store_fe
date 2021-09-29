import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './index.scss'
const InputField = forwardRef((props, ref) => {
	const [message, setMessage] = useState('')
	const [error, setError] = useState(false)
	const { label, disable, type, placeholder, value, style } = props

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

	const textInput = () => (
		<>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				style={style}
				type={type}
				placeholder={placeholder}
				value={value}
				disable={disable}
				onChange={props.onChange}
				maxLength={props.maxLength}
			/>
		</>
	)

	const textInputPass = () => (
		<>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				style={style}
				type="password"
				placeholder={placeholder}
				value={value}
				disable={disable}
				onChange={props.onChange}
			/>
		</>
	)

	return (
		<Form.Group className="mb-3">
			{props.isPicker ? <></> : props.isPassword ? textInputPass() : textInput()}
			{error ? <Form.Text className="text_error">{message}</Form.Text> : null}
		</Form.Group>
	)
})

export default InputField
InputField.propType = {
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	disable: PropTypes.bool,
	isPassword: PropTypes.bool,
}
