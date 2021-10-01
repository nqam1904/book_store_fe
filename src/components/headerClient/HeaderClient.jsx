import { InputField, Canvas, ButtonDiscord, ButtonLogin } from 'components'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAction } from 'redux/actions/loginAction'
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
				? dispatch(loginAction({ email, password }))
				: toast.error('Email is not valid', { theme: 'dark' })
		} else {
			email === '' && emailRef.current.showError('Please enter email!')
			password === '' && passwordRef.current.showError('Please enter password!')
		}
	}
	const onFormLogin = () => {
		canvasRef.current.open()
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
						<Link to="#blog">Blog</Link>
						<Link to="#reviews">Reviews</Link>
						<Link to="#about">About</Link>
					</nav>
				</div>
			</header>
			{/* <!-- bottom navbar  --> */}
			<nav className="bottom-navbar-header">
				<Link to="#home" className="fas fa-home"></Link>
				<Link to="#book" className="fas fa-list"></Link>
				<Link to="#blog" className="fas fa-tags"></Link>
				<Link to="#reviews" className="fas fa-comments"></Link>
				<Link to="#about" className="fas fa-blog"></Link>
			</nav>
			<Canvas ref={canvasRef} title="Login" placement="end" scroll={true} backdrop={true}>
				<form>
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

					<div className="d-grid gap-2">
						<ButtonLogin onClick={onSubmit} />
						<div className="text-center option-social">
							<hr class="flex-fill m-0"></hr>
							<span className="text-or">OR</span>
							<hr class="flex-fill m-0"></hr>
						</div>

						<ButtonDiscord />
					</div>

					<div className="sign-up">
						<p>
							Forget password? <Link to="#">Click here</Link>
						</p>
						<p>
							Don't have an account? <Link to="#">Create one</Link>
						</p>
					</div>
				</form>
			</Canvas>
		</>
	)
}

export default HeaderClient
