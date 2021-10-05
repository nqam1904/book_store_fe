import { InputField } from 'components'
import React, { useRef, useState, Button } from 'react'
import { Col, Row } from 'react-bootstrap'
import './index.scss'
const Profile = (props) => {
	const [fullName, setFullName] = useState(props.user?.firstName)
	const [lastName, setLastName] = useState(props.user?.lastName)
	const [phone, setPhone] = useState(props.user?.phone)
	const [email, setEmail] = useState(props.user?.email)
	const [password, setPassword] = useState('')
	const [isEdit, setIsEdit] = useState(true)

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
	const onEdit = () => {
		setIsEdit(false)
	}
	return (
		<div className="profile-item">
			<Row xs="auto">
				<Col md="6">
					<InputField
						ref={fullNameRef}
						name="firstName"
						placeholder="First Name"
						label="First Name"
						type="text"
						onChange={onChangeFullName}
						value={fullName}
						readOnly={isEdit}
					/>
					<InputField
						ref={lastNameRef}
						name="lastName"
						placeholder="Last Name"
						label="Last Name"
						type="text"
						onChange={onChangeLastName}
						value={lastName}
						readOnly={isEdit}
					/>
				</Col>
				<Col md="6">
					<InputField
						ref={emailRef}
						name="email"
						placeholder="Email"
						label="Email"
						type="email"
						onChange={onChangeEmail}
						value={email}
						readOnly={isEdit}
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
						readOnly={isEdit}
					/>
				</Col>
			</Row>
		</div>
	)
}
export default Profile
