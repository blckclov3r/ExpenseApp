

import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import Expenses from './Expenses'
import Income from './Income'
import TransactionList from './TransactionList'

export default function MainContainer() {

    useEffect(()=>{
        // add overflow hidden in body class
        document.body.classList.add('overflow-hidden');
        
        document.getElementById('transactionList').classList.add('overflow-y');
        document.getElementById('main').classList.add('h-75');
        document.getElementById('mainRow').classList.add('h-100');
  

        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            document.getElementById('main').classList.remove('h-75');
            document.getElementById('transactionList').classList.remove('overflow-y');
            document.body.classList.remove('overflow-hidden');
            document.getElementById('mainRow').classList.remove('h-100');
        }

        //simply called when leave|transition link in order to remove overflow-hidden
        return () =>{
            console.log('leave')
            document.body.classList.remove('overflow-hidden');
            document.getElementById('main').classList.remove('h-75');
        }
    },[])


    return (
        <>
           
            <Row id='mainRow' className='gx-5'>
     
                <Col md={8}>
                <h3 className='mt-4'>Overview</h3>
                    <Row className='my-4 gx-2'>
                        <Col md={4} xs={12} className="mb-2" >
                            <Balance />
                        </Col>
                        <Col md={4} xs={12} className="mb-2" >
                            <Income />
                        </Col>
                        <Col md={4} xs={12} className="mb-2" >
                            <Expenses />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            
                            <AddTransaction />
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className='h-100'>
                    <h3 className='mt-4'>History</h3>
                        <TransactionList   />
                </Col>
            </Row>

        </>
    )
}
