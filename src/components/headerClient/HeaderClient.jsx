import { InputField, Canvas } from 'components'
import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { validateEmail } from 'utils/function'
import './index.scss'
const HeaderClient = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const passwordRef = useRef()
	const emailRef = useRef()
	const canvasRef = useRef()
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
				? console.log('done')
				: toast.error('Email is not valid', { theme: 'dark' })
		} else {
			email === '' && emailRef.current.showError('Please enter email!')
			password === '' && passwordRef.current.showError('Please enter password!')
		}
	}
	const onFormLogin = () => {
		canvasRef.current.open()
	}
	const onLoginDiscord = () => {
		window.open(
			'https://discord.com/api/oauth2/authorize?client_id=893506542073171968&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify%20email'
		)
	}
	return (
		<>
			<header className="header">
				<div className="header-1">
					<Link to="#" className="logo">
						<i className="fas fa-book"></i> eBook
					</Link>

					<div className="icons">
						<Link to="#" className="fas fa-heart"></Link>
						<div className="fas fa-user" onClick={onFormLogin}></div>
					</div>
				</div>

				<div className="header-2">
					<nav className="navbar-header">
						<Link to="#home">Home</Link>
						<Link to="#book">Book</Link>
						<Link to="#document">Document</Link>
						<Link to="#reviews">Reviews</Link>
						<Link to="#about">About</Link>
					</nav>
				</div>
			</header>
			{/* <!-- bottom navbar  --> */}
			<nav className="bottom-navbar-header">
				<Link to="#home" className="fas fa-home"></Link>
				<Link to="#book" className="fas fa-list"></Link>
				<Link to="#document" className="fas fa-tags"></Link>
				<Link to="#reviews" className="fas fa-comments"></Link>
				<Link to="#about" className="fas fa-blog"></Link>
			</nav>
			<Canvas ref={canvasRef} title="Login" placement="end" scroll={true} backdrop={true}>
				<form onSubmit={onSubmit}>
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
					<Button variant="success" type="submit">
						Login
					</Button>

					<Button variant="success" onClick={onLoginDiscord}>
						Discord
					</Button>
				</form>
			</Canvas>
		</>
	)
}

export default HeaderClient
