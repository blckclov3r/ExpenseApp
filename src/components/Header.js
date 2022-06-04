

import React from 'react'
import {   Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>

    <Navbar bg="dark" variant="dark">
             <Container>
             <Navbar.Brand href="#home">ExpenseApp</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className='nav-link' to="v1">Version1</Link>
                    <Link className='nav-link' to="v2">Version2</Link>
                </Nav>
                <Nav className="ms-auto">
                </Nav>
             </Container>
    </Navbar>
      
    </>
  )
}
