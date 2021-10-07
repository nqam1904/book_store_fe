import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Button, Table } from 'react-bootstrap'
import { Modal, InputField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { listCategorySelector } from 'redux/selectores/bookSelector'
import {
	createCategoryAction,
	deleteCategoryAction,
	editCategoryAction,
	getListCategoryAction,
} from 'redux/actions/bookAction'
import { format } from 'date-fns'
export const DialogCategoryRef = React.createRef()
const Category = () => {
	const [name, setName] = useState('')
	const [isEdit, setIsEdit] = useState(false)
	const [id, setId] = useState('')

	const nameRef = useRef()
	const dispatch = useDispatch()
	const listCategory = useSelector(listCategorySelector)
	console.log(listCategory, 'list')
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
		setIsEdit(false)
		setId('')
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!name) {
			dispatch(createCategoryAction({ name: name }))
		} else {
			name === '' && nameRef.current.showError('Please enter category name!')
		}
	}
	const onEdit = () => dispatch(editCategoryAction({ name, id }))
	const openDialogEdit = (category) => {
		DialogCategoryRef.current.open()
		setName(category.name)
		setIsEdit(true)
		setId(category.id)
	}
	const onRemove = (id) => {
		dispatch(deleteCategoryAction(id))
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
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{listCategory.map((item, index) => (
						<tr key={index}>
							<td>{item?.name}</td>
							<td>{format(new Date(item?.createDate), 'dd-LL-yyyy')}</td>
							<td className="text-center">
								<Button
									variant="warning"
									className="text-white"
									onClick={() => openDialogEdit(item)}>
									Edit
								</Button>
								<Button variant="danger ml-10" onClick={() => onRemove(item.id)}>
									Remove
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal
				ref={DialogCategoryRef}
				title={isEdit ? 'Edit Category' : 'Create Category'}
				onSubmit={isEdit ? onEdit : onSubmit}
				size="lg">
				<form onSubmit={onSubmit}>
					<div className="form-group">
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
			</Modal>
		</div>
	)
}
export default Category
