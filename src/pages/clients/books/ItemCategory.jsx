import React from 'react'
import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
const ItemCategory = (props) => {
	return (
		<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
			<Row>
				<Col sm={4}>
					<ListGroup>
						<ListGroup.Item action href="#link1">
							Link 1
						</ListGroup.Item>
						<ListGroup.Item action href="#link2">
							Link 2
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</Tab.Container>
	)
}

export default ItemCategory
