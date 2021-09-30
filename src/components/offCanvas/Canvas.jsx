import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
const Canvas = forwardRef((props, ref) => {
	const [show, setShow] = useState(false)

	useImperativeHandle(ref, () => ({
		open: () => open(),
		close: () => close(),
	}))

	const open = () => setShow(true)
	const close = () => setShow(false)

	return (
		<Offcanvas show={show} onHide={close} {...props}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>{props.title}</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>{props.children}</Offcanvas.Body>
		</Offcanvas>
	)
})

export default Canvas
