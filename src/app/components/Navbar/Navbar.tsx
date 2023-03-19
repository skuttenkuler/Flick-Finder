import React from "react"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

const Navigation: React.FunctionComponent = () => {
    return (
        <Container>
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="light" bg="light">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Navbar.Brand className="link-text" href="/">Home</Navbar.Brand>
                        <Navbar.Brand className="link-text" href="/about">About</Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
};

export default Navigation;
