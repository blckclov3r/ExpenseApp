

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import Expenses from './Expenses'
import Income from './Income'
import TransactionList from './TransactionList'

export default function MainContainer() {
    return (
        <>

            <Row className='gx-4'>
                <Col md={8}>
                    <Row className='my-4 gx-5'>
                        <Col md={3} >
                            <Balance />
                        </Col>
                        <Col md={3}>
                            <Income />
                        </Col>
                        <Col md={3}>
                            <Expenses />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <AddTransaction />
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Container className='mt-4'>
                        <TransactionList />
                    </Container>
                </Col>
            </Row>

        </>
    )
}
