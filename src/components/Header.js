

import React from 'react'
import {   Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>

    <Navbar bg="dark" variant="dark">
             <Container>
             <Link className='navbar-brand' to="v1"><h1 className='fs-4'>ExpenseApp</h1></Link>
                <Nav className="mr-auto">
                    <Link className='nav-link' to="v1">Expense-1</Link>
                    <Link className='nav-link' to="v2">Expense-2</Link>
                </Nav>
                <Nav className="ms-auto">
                </Nav>
             </Container>
    </Navbar>
      
    </>
  )
}
