import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Button, Table } from 'react-bootstrap'
import { Diaglog, InputField, DropFileInput, DropDown } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { listBookSelector, listCategorySelector } from 'redux/selectores/bookSelector'
import { getListBookAction, getListCategoryAction } from 'redux/actions/bookAction'
import { format } from 'date-fns'
import './index.scss'
import { formatSubstring } from 'utils/function'
import { uploadAction } from 'redux/actions/uploadAction'
import { fileSelector } from 'redux/selectores/uploadSelector'

const Book = () => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [category, setCategory] = useState('')
	const [file, setFile] = useState([])
	const [isEdit, setIsEdit] = useState(false)
	const DialogRef = useRef()
	const titleRef = useRef()
	const authorRef = useRef()

	const dispatch = useDispatch()
	const listBook = useSelector(listBookSelector)
	const listCategory = useSelector(listCategorySelector)
	const files = useSelector(fileSelector)
	
	useEffect(() => {
		dispatch(getListCategoryAction())
	}, [])
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])
	const onChangeTitle = (e) => {
		e.preventDefault()
		setTitle(e.target.value)
		titleRef.current.hideError()
	}

	const onChangeAuthor = (e) => {
		e.preventDefault()
		setAuthor(e.target.value)
		authorRef.current.hideError()
	}

	const openDialog = () => {
		DialogRef.current.open()
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!title && !!author) {
			console.log('done')
		} else {
			title === '' && titleRef.current.showError('Please enter title!')
			author === '' && authorRef.current.showError('Please enter author!')
		}
	}
	const onChange = (value) => {
		setCategory(value)
	}
	const openDialogEdit = () => {
		DialogRef.current.open()
		setIsEdit(true)
	}
	const onRemove = (id) => {}
	const onFileChange = (files) => {
		dispatch(uploadAction(files))
	}
	return (
		<div className="container">
			<div className="nav_user">
				<h2>Book</h2>
				<div className="text-right">
					<Button variant="outline-primary" onClick={openDialog}>
						Create Book
					</Button>
				</div>
			</div>

			<Table striped bordered hover responsive className="mt-10">
				<thead>
					<tr>
						<th>Image</th>
						<th>Book Name</th>
						<th>Author</th>
						<th>Categories</th>
						<th>Create Date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{listBook.map((item, index) => (
						<tr key={item.id + index}>
							<td>{item?.images[0].key}</td>
							<td>{formatSubstring(item?.title)}</td>
							<td>{item?.author}</td>
							<td>{item?.categories?.map((item) => item?.name)}</td>
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

			<Diaglog
				ref={DialogRef}
				title={isEdit ? 'Update Book' : 'Create Book'}
				onSubmit={onSubmit}
				size="lg">
				<form>
					<div className="row">
						<div className="form-group col-6">
							<InputField
								ref={titleRef}
								name="title"
								placeholder="Title"
								label="Title"
								type="text"
								onChange={onChangeTitle}
								value={title}
							/>
						</div>
						<div className="form-group col-6">
							<InputField
								ref={authorRef}
								name="author"
								placeholder="Author"
								label="Author"
								type="text"
								onChange={onChangeAuthor}
								value={author}
							/>
						</div>
						<div className="form-group">
							<DropDown
								title="Category"
								options={listCategory.map((item) => {
									return {
										label: item.name,
										value: item.id,
									}
								})}
								onChange={onChange}
							/>
						</div>
						<br />
						<div className="drop-image">
							<DropFileInput onFileChange={(files) => onFileChange(files)} />
						</div>
					</div>
				</form>
			</Diaglog>
		</div>
	)
}
export default Book
