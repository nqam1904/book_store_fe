import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Button, Table } from 'react-bootstrap'
import { Diaglog, InputField } from 'components'
import { listAccountSelector } from 'redux/selectores/authSelector'
import { useDispatch, useSelector } from 'react-redux'
import { createAccountAction, getListAccountAction } from 'redux/actions/loginAction'
import { format } from 'date-fns'

export const DialogRef = React.createRef()

const User = () => {
	const dispatch = useDispatch()
	const listAccount = useSelector(listAccountSelector)
	useEffect(() => {
		dispatch(getListAccountAction())
		// eslint-disable-next-line
	}, [])

	const [fullName, setFullName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const fullNameRef = useRef()
	const lastNameRef = useRef()
	const phoneRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

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

	const openDialog = () => {
		DialogRef.current.open()
		setFullName('')
		setLastName('')
		setPhone('')
		setEmail('')
		setPassword('')
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
		<div className="container">
			<div className="nav_user">
				<h2>Account</h2>
				<div className="text-right">
					<Button variant="outline-primary" onClick={openDialog}>
						Create Account
					</Button>
				</div>
			</div>

			<Table striped bordered hover responsive className="mt-10">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Active</th>
						<th>Create Date</th>
					</tr>
				</thead>
				<tbody>
					{listAccount.map((item, index) => (
						<tr key={item.id + index}>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
							<td>{item.isActive + ''}</td>
							<td>{format(new Date(item?.createDate), 'dd-LL-yyyy') + ''}</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Diaglog ref={DialogRef} title="Create Account" onSubmit={onSubmit} size="lg">
				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="form-group col-6">
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
						<div className="form-group col-6">
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
						</div>
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
					</div>
				</form>
			</Diaglog>
		</div>
	)
}
export default User
