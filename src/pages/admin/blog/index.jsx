import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, DropDown, InputField } from 'components'
import { IMG_URL } from 'config'
import { format } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createBlogAction, getListBlogAction } from 'redux/actions/blogAction'
import { listBlogSelector } from 'redux/selectores/blogSelector'
import { listCategorySelector } from 'redux/selectores/bookSelector'
import { formatSubstring } from 'utils/function'
import './index.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
library.add(faEye)
export const DialogCreateBookRef = React.createRef()
const Blog = () => {
	const dispatch = useDispatch()
	const listBlog = useSelector(listBlogSelector)
	const listCategory = useSelector(listCategorySelector)
	const [title, setTitle] = useState('')
	const [category, setCategory] = useState('')
	const [fileImage, setFileImage] = useState([])
	const [addData, setAddData] = useState('')
	const [isEdit, setIsEdit] = useState(false)
	const titleRef = useRef()
	const cateRef = useRef()

	useEffect(() => {
		dispatch(getListBlogAction())
	}, [])

	const onChangeTitle = (e) => {
		e.preventDefault()
		setTitle(e.target.value)
		titleRef.current.hideError()
	}

	const openDialog = () => {
		DialogCreateBookRef.current.open()
		setTitle('')
		setCategory('')
		setIsEdit(false)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!!title && !!category) {
			dispatch(
				createBlogAction({
					title,
					categoriesId: [category.value],
					fileImage,
					addData,
				})
			)
		} else {
			title === '' && titleRef.current.showError('Please enter title!')
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
	const onRemove = (id) => {}

	const onChangeFileImage = (e) => {
		setFileImage(e.target.files)
	}
	const handleChange = (e, editor) => {
		const data = editor.getData()
		setAddData(data)
	}
	return (
		<div className="container">
			<div className="nav_user">
				<h2>BLOG</h2>
				<div className="text-right">
					<Button variant="outline-primary" onClick={openDialog}>
						Create Blog
					</Button>
				</div>
			</div>

			<Table striped bordered hover responsive className="mt-10">
				<thead>
					<tr>
						<th>Title</th>
						<th>Content</th>
						<th>Author</th>
						<th>Categories</th>
						<th>Create Date</th>
						<th>PDF</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{listBlog?.map((item, index) => (
						<tr key={index}>
							<td>
								<img src={IMG_URL + item?.images[0]?.key} className="image_book" />
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

			<Modal
				ref={DialogCreateBookRef}
				title={isEdit ? 'Update blog' : 'Create blog'}
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
						<Form.Group controlId="formFile mb-10">
							<Form.Label>Image thumbnail</Form.Label>
							<Form.Control type="file" onChange={onChangeFileImage} />
						</Form.Group>
						<br />
						<div className="form-group mt-10">
							<br />

							<CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
						</div>
					</div>
				</form>
			</Modal>
		</div>
	)
}
export default Blog
