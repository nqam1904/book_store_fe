import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Button, Table } from 'react-bootstrap'
import { Diaglog, InputField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { listBookSelector } from 'redux/selectores/bookSelector'
import { getListBookAction } from 'redux/actions/bookAction'
import { format } from 'date-fns'

const Book = () => {
	const [fullName, setFullName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const DialogRef = useRef()
	const fullNameRef = useRef()
	const lastNameRef = useRef()
	const phoneRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

	const dispatch = useDispatch()
	const listBook = useSelector(listBookSelector)
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])

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
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!fullName && !!lastName && !!phone && !!email && !!password) {
			console.log('done')
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
				<h2>Book</h2>
				<div className="text-right">
					<Button variant="outline-primary" onClick={openDialog}>
						Create Book
					</Button>
				</div>
			</div>

			<Table striped bordered hover responsive className="mt-10">
				<thead>
					<tr>
						<th>Book Name</th>
						<th>Author</th>
						<th>Image</th>
						<th>Categories</th>
						<th>Create Date</th>
					</tr>
				</thead>
				<tbody>
					{listBook.map((item, index) => (
						<tr key={item.id + index}>
							<td>{item?.title}</td>
							<td>{item?.author}</td>
							<td></td>
							<td>{item?.categories?.map((item, index) => item?.name + ', ')}</td>
							<td>{format(new Date(item?.createDate), 'dd-LL-yyyy')}</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Diaglog ref={DialogRef} title="Create Book" onSubmit={onSubmit} size="lg">
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
							type="text"
							onChange={onChangePhone}
							value={phone}
						/>
					</div>
				</form>
			</Diaglog>
		</div>
	)
}
export default Book
