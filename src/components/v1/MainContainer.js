

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import Expenses from './Expenses'
import Income from './Income'
import TransactionList from './TransactionList'

export default function MainContainer() {
    return (
        <>
           
            <Row className='gx-5'>
     
                <Col md={8}>
                <h3 className='mt-4'>Overview</h3>
                    <Row className='my-4 gx-2'>
                        <Col md={4} xs={12} >
                            <Balance />
                        </Col>
                        <Col md={4} xs={12} >
                            <Income />
                        </Col>
                        <Col md={4} xs={12} >
                            <Expenses />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <AddTransaction />
                        </Col>
                    </Row>
                </Col>
                <Col md={4} >
                        <TransactionList  />
                </Col>
            </Row>

        </>
    )
}
