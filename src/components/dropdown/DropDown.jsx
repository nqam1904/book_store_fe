import React from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

const DropDown = (props) => {
	return (
		<>
			<Form.Label>{props.title}</Form.Label>
			<Select options={props.options} onChange={props.onChange} />
		</>
	)
}

export default DropDown
