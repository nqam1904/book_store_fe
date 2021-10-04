import { InputField, Canvas, ButtonDiscord, ButtonLogin } from 'components'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAction, signOutAction } from 'redux/actions/loginAction'
import { validateEmail } from 'utils/function'
import { userSelector } from 'redux/selectores/authSelector'
import { Button } from 'react-bootstrap'
import './index.scss'
import { images } from 'assets/images'
import StorageKeys from 'constants/Storage-key'
import SignUpForm from './SignUpForm'
export const signUpRef = React.createRef()
const HeaderClient = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const passwordRef = useRef()
	const emailRef = useRef()
	const signInRef = useRef()

	const dispatch = useDispatch()
	const userAuth = useSelector(userSelector)
	const isloggedin = localStorage.getItem(StorageKeys.TOKEN)
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
		signInRef.current.open()
	}
	const onFormSignUp = () => {
		signUpRef.current.open()
	}
	const onLogout = () => {
		dispatch(signOutAction())
		setEmail('')
		setPassword('')
		localStorage.clear()
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
						<Link to="/">Home</Link>
						<Link to="/books">Book</Link>
						<Link to="/blog">Blog</Link>
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
			<Canvas
				ref={signInRef}
				title={`${isloggedin ? `Hi, ${userAuth.lastName}` : 'Login'}`}
				placement="end"
				scroll={true}
				backdrop={true}>
				{isloggedin ? (
					<>
						<img src={images.logo_discord} className="avatar-client" />
						<Link to="/users">
							<h4 className="name-account">{userAuth.email}</h4>
						</Link>
						<div className="d-grid gap-2">
							<Button variant="primary" onClick={onLogout}>
								LOGOUT
							</Button>
						</div>
					</>
				) : (
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
								<hr className="flex-fill m-0"></hr>
								<span className="text-or">OR</span>
								<hr className="flex-fill m-0"></hr>
							</div>

							<ButtonDiscord />
						</div>

						<div className="sign-up">
							<p>
								Forget password? <Link to="#">Click here</Link>
							</p>
							<p>
								Don't have an account?{' '}
								<span onClick={onFormSignUp} className="text">
									Create one
								</span>
							</p>
						</div>
					</form>
				)}
			</Canvas>
			<Canvas ref={signUpRef} title="Sign Up" placement="end" scroll={true} backdrop={true}>
				<SignUpForm />
			</Canvas>
		</>
	)
}

export default HeaderClient
