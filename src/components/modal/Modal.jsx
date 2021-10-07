import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
const ModalCustom = forwardRef((props, ref) => {
	const [show, setShow] = useState(false)

	useImperativeHandle(ref, () => ({
		open: () => open(),
		close: () => close(),
	}))

	const open = () => setShow(true)
	const close = () => setShow(false)

	return (
		<Modal
			title={props.title}
			centered
			visible={show}
			onOk={close}
			onCancel={close}
			footer={props.hideBottom ? '' : null}
			width={props.width}>
			{props?.children}
		</Modal>
	)
})

Modal.propTypes = {
	onSubmit: PropTypes.func,
	title: PropTypes.string,
	size: PropTypes.string,
	hideBottom: PropTypes.bool,
}
export default ModalCustom
