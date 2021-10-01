import { images } from 'assets/images'
import { IMG_URL } from 'config'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const ItemBook = (props) => {
	return (
		<div className="item-book" onClick={() => {}}>
			<LazyLoadImage
				className="image"
				effect="blur"
				// src={props.images ? IMG_URL + props?.images : images.cloud_upload}
				src={images.node}
				alt={props.name}
				placeholderSrc={images.loader_img.default}
			/>
			<h5 id="name-book" className="book-name" aria-hidden="true">
				{props.name}
			</h5>
			<div className="overlay">
				<div className="overlay-icons">
					<span className="fas fa-heart" onClick={props.onFavorite}></span>
					<div className="fas fa-eye" onClick={props.onViewPdf}></div>
				</div>
				<div className="description">{props.author}</div>
			</div>
		</div>
	)
}

export default ItemBook
