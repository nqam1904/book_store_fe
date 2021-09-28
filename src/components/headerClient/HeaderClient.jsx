import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HeaderClient = () => {
	return (
		<Navbar expand="lg" variant="light" bg="light" fixed="top">
			<Container>
				<Navbar.Brand href="#home">Programming Books</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav.Link as={Link} to="/books">
						Book
					</Nav.Link>
					<Nav.Link as={Link} to="/document" href="#features">
						Document
					</Nav.Link>
					<Nav.Link as={Link} to="/login">
						Login
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default HeaderClient
