import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

const Navigation: React.FunctionComponent = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/about">About</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
};

export default Navigation;
