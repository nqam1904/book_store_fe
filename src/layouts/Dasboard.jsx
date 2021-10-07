import { Header, FooterAnt, SiderAnt } from 'components'
import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react'
const Dasboard = (props) => {
	const [sider, setSider] = useState(true)
	const [collapsed, setCollapsed] = React.useState(false)
	const onChange = () => {
		setCollapsed(!collapsed)
		setSider(!sider)
	}
	return (
		<>
			<Layout>
				<SiderAnt
					iconApp={
						sider ? (
							<div className="logo-sider">
								<i className="fas fa-book"></i> eBook.io
							</div>
						) : (
							<></>
						)
					}
					collapsed={collapsed}
				/>
				<Layout>
					<Header
						onClick={onChange}
						iconLeft={
							sider ? (
								<MenuUnfoldOutlined className="icon-menu" />
							) : (
								<MenuFoldOutlined className="icon-menu" />
							)
						}
					/>
					{props.children}
				</Layout>
			</Layout>
			<FooterAnt />
		</>
	)
}

export default Dasboard
