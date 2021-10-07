import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Button, Table } from 'react-bootstrap'
import { Modal, InputField } from 'components'
import { listAccountSelector } from 'redux/selectores/authSelector'
import { useDispatch, useSelector } from 'react-redux'
import {
	createAccountAction,
	getListAccountAction,
	editAccountAction,
	deleteAccountAction,
} from 'redux/actions/loginAction'
import { format } from 'date-fns'

export const DialogRef = React.createRef()

const User = () => {
	const dispatch = useDispatch()
	const listAccount = useSelector(listAccountSelector)
	useEffect(() => {
		dispatch(getListAccountAction())
		// eslint-disable-next-line
	}, [])
	const [id, setId] = useState('')
	const [fullName, setFullName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isEdit, setIsEdit] = useState(false)

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
		setId('')
		setIsEdit(false)
	}

	const openDialogEdit = (user) => {
		DialogRef.current.open()
		setFullName(user.firstName)
		setLastName(user.lastName)
		setPhone(user.phone)
		setEmail(user.email)
		setId(user.id)
		setIsEdit(true)
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
					role: 'admin',
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

	const onEdit = (e) => {
		dispatch(editAccountAction({ firstName: fullName, lastName, phone, email, id }))
	}
	const onRemove = (id) => {
		dispatch(deleteAccountAction(id))
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
						<th>Role</th>
						<th>Create Date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{listAccount.map((item, index) => (
						<tr key={index}>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
							<td>{item.isActive + ''}</td>
							<td>{item.role}</td>
							<td>{format(new Date(item?.createDate), 'dd-LL-yyyy') + ''}</td>
							<td className="text-center">
								<Button
									variant="warning"
									className="text-white"
									onClick={() => openDialogEdit(item)}>
									Edit
								</Button>
								<Button variant="danger ml-10" onClick={() => onRemove(item.id)}>
									Remove
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal
				ref={DialogRef}
				title={isEdit ? 'Edit Account' : 'Create Account'}
				onSubmit={isEdit ? onEdit : onSubmit}
				size="lg">
				<form
				// onSubmit={isEdit ? onEdit : onSubmit}
				>
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
							{!isEdit ? (
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
							) : (
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
							)}
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
			</Modal>
		</div>
	)
}
export default User
