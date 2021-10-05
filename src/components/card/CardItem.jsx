import { images } from 'assets/images'
import { IMG_URL } from 'config'
import React, { forwardRef } from 'react'
import { Card, Button } from 'react-bootstrap'
import './index.scss'
const CardItem = forwardRef((props, ref) => {
	return (
		<Card style={{ width: '18rem' }} className="book-card">
			<Card.Img
				variant="top"
				className="image-item"
				src={props.image ? `${IMG_URL}` + `${props.image}` : images.file_pdf.default}
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="primary" onClick={() => window.open(IMG_URL + props.pdf, '_blank')}>
					Read
				</Button>
			</Card.Body>
		</Card>
	)
})

export default CardItem
