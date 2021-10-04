import React, { useEffect, useRef, useState } from 'react'
import { Diaglog, InputField } from 'components'
import ButtonLogin from 'components/button/ButtonLogin'
import { createAccountAction } from 'redux/actions/loginAction'
import { useDispatch } from 'react-redux'

function SignUpForm() {
	const dispatch = useDispatch()
	const [fullName, setFullName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	//** */

	const fullNameRef = useRef()
	const lastNameRef = useRef()
	const phoneRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	//*** */
	const onChangeFullName = (e) => {
		e.preventDefault()
		setFullName(e.target.value)
		fullNameRef.current.hideError()
	}

	const onChangeLastName = (e) => {
		e.preventDefault()
		setLastName(e.target.value)
		lastNameRef.current.hideError()
	}

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

	const onChangePhone = (e) => {
		e.preventDefault()
		setPhone(e.target.value)
		phoneRef.current.hideError()
	}
	const onSubmit = (e) => {
		e.preventDefault()
		if (!!fullName && !!lastName && !!phone && !!email && !!password) {
			dispatch(
				createAccountAction({
					firstName: fullName,
					lastName,
					phone,
					password,
					email,
				})
			)
		} else {
			fullName === '' && fullNameRef.current.showError('Please enter full name!')
			lastName === '' && lastNameRef.current.showError('Please enter last name!')
			phone === '' && phoneRef.current.showError('Please enter phone!')
			email === '' && emailRef.current.showError('Please enter email!')
			password === '' && passwordRef.current.showError('Please enter password!')
		}
	}
	return (
		<div>
			<form>
				<div>
					<InputField
						ref={fullNameRef}
						name="firstName"
						placeholder="First Name"
						label="First Name"
						type="text"
						onChange={onChangeFullName}
						value={fullName}
					/>
					<InputField
						ref={lastNameRef}
						name="lastName"
						placeholder="Last Name"
						label="Last Name"
						type="text"
						onChange={onChangeLastName}
						value={lastName}
					/>
				</div>
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
				<InputField
					ref={phoneRef}
					name="phone"
					placeholder="Phone"
					label="Phone"
					maxLength={10}
					type="number"
					onChange={onChangePhone}
					value={phone}
				/>
			</form>
			<ButtonLogin onClick={onSubmit} title="Sign Up" />
		</div>
	)
}

export default SignUpForm
