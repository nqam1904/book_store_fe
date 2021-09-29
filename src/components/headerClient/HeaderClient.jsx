import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
const HeaderClient = () => {
	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Programming Books
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav.Link as={NavLink} activeClassName="current" to="/books">
						Book
					</Nav.Link>
					<Nav.Link as={NavLink} activeClassName="current" to="/documents" href="#features">
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
