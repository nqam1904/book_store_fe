import { images } from 'assets/images'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from 'redux/selectores/authSelector'
import './index.scss'
import { Tabs, Tab } from 'react-bootstrap'
import Profile from './Profile'
import { Link } from 'react-router-dom'

const Users = () => {
	const dispatch = useDispatch()

	const userAuth = useSelector(userSelector)

	useEffect(() => {}, [])

	const onFavorite = () => {}

	return (
		<div className="container mt-10">
			<div className="back-to_menu">
				<i className="fa fa-arrow-left"></i>
				<Link className="ml-10" to="/">
					<span>Back</span>
				</Link>
			</div>
			<div className="profile-header">
				<div className="profile-img">
					<img src={images.logo_discord} width="200" alt="Profile Image" />
				</div>
				<div className="profile-nav-info">
					<h3 className="user-name">{`${userAuth?.firstName}` + ` ${userAuth?.lastName}`}</h3>
					<div className="address">
						<p id="state" className="state">
							New York,
						</p>
						<span id="country" className="country">
							USA.
						</span>
					</div>
				</div>
				<div className="profile-option">
					<div className="notification">
						<i className="fa fa-bell"></i>
						<span className="alert-message">3</span>
					</div>
				</div>
			</div>

			<div className="main-bd">
				<div className="left-side">
					<div className="profile-side">
						<p className="mobile-no">
							<i className="fa fa-phone"></i> <span>{userAuth?.phone}</span>
						</p>
						<p className="user-mail">
							<i className="fa fa-envelope"></i> <span>{userAuth?.email}</span>
						</p>
					</div>
				</div>
				<div className="right-side">
					<Tabs defaultActiveKey="profile" className="mb-3 ml-10">
						<Tab eventKey="profile" title="Profile">
							<Profile user={userAuth} />
						</Tab>
						<Tab eventKey="favorite" title="Favorite">
							<ul>
								<li>There are not list favorite</li>
							</ul>
						</Tab>
					</Tabs>
				</div>
			</div>
		</div>
	)
}

export default Users
