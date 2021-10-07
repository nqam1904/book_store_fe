import {
	ApartmentOutlined,
	UserOutlined,
	CopyOutlined,
	ReadOutlined,
	BarChartOutlined,
} from '@ant-design/icons'
import { Menu, Layout } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
const { Sider } = Layout
const SiderAnt = (props) => {
	return (
		<Sider trigger={null} collapsible collapsed={props.collapsed} className="sider-layout">
			{props.iconApp}
			<Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="0" icon={<BarChartOutlined />}>
					<Link to="/admin">Chart</Link>
				</Menu.Item>
				<Menu.Item key="1" icon={<UserOutlined />}>
					<Link to="/admin/account">Account</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<ReadOutlined />}>
					<Link to="/admin/book">Book</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<ApartmentOutlined />}>
					<Link to="/admin/category">Category</Link>
				</Menu.Item>
				<Menu.Item key="4" icon={<CopyOutlined />}>
					<Link to="/admin/blog">Blog</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	)
}

export default SiderAnt
