import { Layout } from 'antd'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { userSelector } from 'redux/selectores/authSelector'
import routes from 'routes'
import './index.scss'
import { DropDownAnt } from 'components'
import { useDispatch } from 'react-redux'
import { signOutAction } from 'redux/actions/loginAction'
import { history } from 'redux/store'

const Header = (props) => {
	const { Header } = Layout
	const user = useSelector(userSelector)
	const dispatch = useDispatch()
	const onLogout = () => {
		dispatch(signOutAction())
		localStorage.clear()
		history.pushState('/login')
	}
	return (
		<Header style={{ backgroundColor: 'white' }}>
			<ul className="header" onClick={props.onClick}>
				<li>{props?.iconLeft}</li>
			</ul>

			<ul className="avatar">
				<li className="header-name">
					<DropDownAnt
						menu="Logout"
						onClick={onLogout}
						title={`${user.firstName} ${user.lastName}`}></DropDownAnt>
				</li>
			</ul>
		</Header>
	)
}
export default Header
