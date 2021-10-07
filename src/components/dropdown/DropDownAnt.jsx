import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const DropDownAnt = (props) => {
	const menu = (
		<Menu>
			<Menu.Item key="0">
				<div onClick={props?.onClick}>
					<span>{props?.menu}</span>
				</div>
			</Menu.Item>
		</Menu>
	)
	return (
		<Dropdown overlay={menu}>
			<div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
				{props.title} <DownOutlined />
			</div>
		</Dropdown>
	)
}

export default DropDownAnt
