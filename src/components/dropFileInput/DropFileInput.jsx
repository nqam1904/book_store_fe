import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ImageConfig } from 'config/ImageConfig'
import { images } from 'assets/images'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
const DropFileInput = (props) => {
	const wrapperRef = useRef(null)

	const [fileList, setFileList] = useState([])

	const onDragEnter = () => wrapperRef.current.classList.add('dragover')

	const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

	const onDrop = () => wrapperRef.current.classList.remove('dragover')
	const onFileDrop = (e) => {
		const newFile = e.target.files[0]
		console.log(newFile)
		if (newFile) {
			const updatedList = [...fileList, newFile]
			setFileList(updatedList)
			props.onFileChange(updatedList)
		}
	}

	const fileRemove = (file) => {
		const updatedList = [...fileList]
		updatedList.splice(fileList.indexOf(file), 1)
		setFileList(updatedList)
		props.onFileChange(updatedList)
	}

	return (
		<>
			<div
				ref={wrapperRef}
				className="drop-file-input"
				onDragEnter={onDragEnter}
				onDragLeave={onDragLeave}
				onDrop={onDrop}>
				<div className="drop-file-input__label">
					<img src={images.cloud_upload.default} alt="" />
					<p>Drag {'&'} Drop your files here</p>
				</div>
				<input type="file" value="" onChange={onFileDrop} />
			</div>
			{fileList.length > 0 ? (
				<div className="drop-file-preview">
					<p className="drop-file-preview__title">Ready to upload</p>
					{fileList.map((item, index) => (
						<div key={index} className="drop-file-preview__item">
							<img
								src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']}
								alt=""
							/>
							<div className="drop-file-preview__item__info">
								<p>{item.name}</p>
								<p>{item.size}B</p>
							</div>
							<span
								className="drop-file-preview__item__del"
								onClick={() => fileRemove(item)}>
								<FontAwesomeIcon className="faicon" icon="trash" />
							</span>
						</div>
					))}
				</div>
			) : null}
		</>
	)
}

DropFileInput.propTypes = {
	onFileChange: PropTypes.func,
}

export default DropFileInput
