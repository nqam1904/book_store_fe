import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Button, Table } from 'react-bootstrap'
import { Diaglog, InputField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { listCategorySelector } from 'redux/selectores/bookSelector'
import { createCategoryAction, getListCategoryAction } from 'redux/actions/bookAction'
import { format } from 'date-fns'
export const DialogCategoryRef = React.createRef()
const Category = () => {
	const [name, setName] = useState('')
	const nameRef = useRef()
	const dispatch = useDispatch()
	const listCategory = useSelector(listCategorySelector)
	useEffect(() => {
		dispatch(getListCategoryAction())
	}, [])

	const onChangeName = (e) => {
		e.preventDefault()
		setName(e.target.value)
		nameRef.current.hideError()
	}

	const openDialog = () => {
		DialogCategoryRef.current.open()
		setName('')
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!name) {
			dispatch(createCategoryAction({ name: name }))
		} else {
			name === '' && nameRef.current.showError('Please enter category name!')
		}
	}

	return (
		<div className="container">
			<div className="nav_user">
				<h2>Category</h2>
				<div className="text-right">
					<Button variant="outline-primary" onClick={openDialog}>
						Create Category
					</Button>
				</div>
			</div>

			<Table striped bordered hover responsive className="mt-10">
				<thead>
					<tr>
						<th>Category Name</th>
						<th>Create Date</th>
					</tr>
				</thead>
				<tbody>
					{listCategory.map((item, index) => (
						<tr key={item.id + index}>
							<td>{item?.name}</td>
							<td>{format(new Date(item?.createDate), 'dd-LL-yyyy')}</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Diaglog ref={DialogCategoryRef} title="Create Category" onSubmit={onSubmit} size="lg">
				<form onSubmit={onSubmit}>
					<div className="form-group col-6">
						<InputField
							ref={nameRef}
							name="Category name"
							placeholder="Category name"
							label="Category name"
							type="text"
							onChange={onChangeName}
							value={name}
						/>
					</div>
				</form>
			</Diaglog>
		</div>
	)
}
export default Category
