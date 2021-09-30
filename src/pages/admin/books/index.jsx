import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Diaglog, DropDown, DropFileInput, InputField } from 'components'
import { IMG_URL } from 'config'
import { format } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
	createBookAction,
	deleteBookAction,
	getListBookAction,
	getListCategoryAction,
} from 'redux/actions/bookAction'
import { listBookSelector, listCategorySelector } from 'redux/selectores/bookSelector'
import { formatSubstring } from 'utils/function'
import './index.scss'
library.add(faEye)
export const DialogCreateBookRef = React.createRef()
const Book = () => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [category, setCategory] = useState('')
	const [file, setFile] = useState([])
	const [fileImage, setFileImage] = useState([])

	const [isEdit, setIsEdit] = useState(false)
	const titleRef = useRef()
	const authorRef = useRef()
	const cateRef = useRef()
	const dispatch = useDispatch()
	const listBook = useSelector(listBookSelector)
	const listCategory = useSelector(listCategorySelector)

	useEffect(() => {
		dispatch(getListCategoryAction())
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
		DialogCreateBookRef.current.open()
		setTitle('')
		setAuthor('')
		setCategory('')
		setFile('')
		setIsEdit(false)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!title && !!author && !!category) {
			dispatch(
				createBookAction({
					title,
					author,
					categoriesId: [category.value],
					file,
					fileImage,
				})
			)
		} else {
			title === '' && titleRef.current.showError('Please enter title!')
			author === '' && authorRef.current.showError('Please enter author!')
			category === '' && cateRef.current.showError('Please enter author!')
		}
	}
	const onChange = (value) => {
		setCategory(value)
	}
	const openDialogEdit = () => {
		DialogCreateBookRef.current.open()
		setIsEdit(true)
	}
	const onRemove = (id) => {
		dispatch(deleteBookAction(id))
	}
	const onChangeFileImage = (e) => {
		setFileImage(e.target.files)
	}
	const onFileChange = (files) => {
		setFile(files)
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
						<th>PDF</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{listBook.map((item, index) => (
						<tr key={item.id + index}>
							<td>
								<img src={IMG_URL + item?.images[0]?.key} class="image_book" />
							</td>
							<td>{formatSubstring(item?.title)}</td>
							<td>{item?.author}</td>
							<td>{item?.categories?.map((item) => item?.name)}</td>
							<td>{format(new Date(item?.createDate), 'dd-LL-yyyy')}</td>
							<th>
								<FontAwesomeIcon
									className="faicon"
									icon="eye"
									onClick={() => window.open(IMG_URL + item?.images[1]?.key, '_blank')}
								/>
							</th>
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
				ref={DialogCreateBookRef}
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
								ref={cateRef}
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
						<Form.Group controlId="formFile" className="mt-10">
							<Form.Label className="mt-10">Image thumbnail</Form.Label>
							<Form.Control type="file" onChange={onChangeFileImage} />
						</Form.Group>
						<div className="drop-image">
							<Form.Label className="mbt-10">PDF</Form.Label>
							<DropFileInput onFileChange={onFileChange} />
						</div>
					</div>
				</form>
			</Diaglog>
		</div>
	)
}
export default Book
