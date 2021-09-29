import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { InputField } from 'components'
import { useDispatch } from 'react-redux'
import { loginAction } from 'redux/actions/loginAction'
import { validateEmail } from 'utils/function'
import { toast } from 'react-toastify'

const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const passwordRef = useRef()
	const emailRef = useRef()
	const dispatch = useDispatch()
	const onChangeEmail = (e) => {
		e.preventDefault()
		setEmail(e.target.value)
		emailRef.current.hideError()
	}

	const onChangePassword = (e) => {
		e.preventDefault()
		setPassword(e.target.value)
		passwordRef.current.hideError()
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!email && !!password) {
			validateEmail(email)
				? dispatch(loginAction({ email: email, password: password }))
				: toast.error('Email is not valid', { theme: 'dark' })
		} else {
			email === '' && emailRef.current.showError('Please enter email!')
			password === '' && passwordRef.current.showError('Please enter password!')
		}
	}
	return (
		<div className="container mt-10">
			<Form>
				<InputField
					ref={emailRef}
					name="email"
					placeholder="Email"
					label="Email"
					type="email"
					onChange={onChangeEmail}
					value={email}
				/>
				<InputField
					ref={passwordRef}
					name="password"
					isPassword
					placeholder="Password"
					label="Password"
					type="password"
					onChange={onChangePassword}
					value={password}
				/>
				<Button variant="primary" type="submit" onClick={onSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default Auth
