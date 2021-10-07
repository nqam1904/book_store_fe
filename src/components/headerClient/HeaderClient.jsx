import { InputField, Modal, ButtonDiscord, ButtonLogin } from 'components'
import StorageKeys from 'constants/Storage-key'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAction, signOutAction } from 'redux/actions/loginAction'
import { userSelector } from 'redux/selectores/authSelector'
import { validateEmail } from 'utils/function'
import './index.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import {
	Form,
	Input,
	InputNumber,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
} from 'antd'
import { useEffect } from 'react'
export const signUpRef = React.createRef()
 
const HeaderClient = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const passwordRef = useRef()
	const emailRef = useRef()
	const signInRef = useRef()
	const ModalRef = useRef()
	const dispatch = useDispatch()
	const userAuth = useSelector(userSelector)
	const isloggedin = localStorage.getItem(StorageKeys.TOKEN)
	const [form] = Form.useForm()
	const [, forceUpdate] = useState({}) // To disable submit button at the beginning.

	useEffect(() => {
		forceUpdate({})
	}, [])
	const onFinish = (values) => {
		dispatch(loginAction({ email: values.email, password: values.password }))
	}
	const onLoginDiscord = () => {
		window.location.href = `https://discord.com/api/oauth2/authorize?client_id=893506542073171968&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify%20email`
	}
	const onFormLogin = () => {
		ModalRef.current.open()
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
					<Link to="/" className="logo">
						<i className="fas fa-book"></i> eBook.io
					</Link>
					<div className="header-2">
						<nav className="navbar-header">
							<div className="link-icon">
								<Link to="/books">
									<i className="fas fa-code"></i>
									Programming
								</Link>
							</div>
							<div className="link-icon">
								<Link to="/blog">
									<i className="fas fa-blog"></i> Blog
								</Link>
							</div>
						</nav>
					</div>
					<div className="icons">
						<Link to="#" className="fas fa-heart"></Link>
						<div className="fas fa-user" onClick={onFormLogin}></div>
					</div>
				</div>
			</header>
			{/* <!-- bottom mobilr navbar  --> */}
			<nav className="bottom-navbar-header">
				<Link to="#home" className="fas fa-home"></Link>
				<Link to="#book" className="fas fa-list"></Link>
				<Link to="#blog" className="fas fa-tags"></Link>
				<Link to="#reviews" className="fas fa-comments"></Link>
				<Link to="#about" className="fas fa-blog"></Link>
			</nav>

			<Modal title="Welcome to eBook.io" width={600} hideBottom ref={ModalRef}>
				<Form form={form} name="horizontal_login" layout="horizontal" onFinish={onFinish}>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your email!',
							},
						]}>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Login
						</Button>
						<span style={{ fontSize: 24, marginLeft: 10 }}>|</span>
						<Button
							onClick={onLoginDiscord}
							type="primary"
							style={{
								background: 'black',
								marginLeft: 10,
								borderColor: 'black',
								color: '#fff',
							}}>
							Discord
						</Button>
					</Form.Item>
				</Form>

				<div className="sign-up">
					<p>
						Don't have an account?
						<span onClick={onFormSignUp} className="text">
							Create one
						</span>
					</p>
				</div>
			</Modal>
		</>
	)
}

export default HeaderClient
