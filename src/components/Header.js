

import React from 'react'
import {   Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <>

    <Navbar bg="dark" variant="dark">
             <Container>
             <Navbar.Brand href="#home">ExpenseApp</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                </Nav>
             </Container>
    </Navbar>
      
    </>
  )
}
