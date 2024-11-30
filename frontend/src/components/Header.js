import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const Header = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">2iMP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="link">Link</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown>              
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}


export default Header