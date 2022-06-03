import React from 'react'
import { Form,InputGroup, Button, ButtonGroup } from 'react-bootstrap'

export default function AddTransaction() {
  return (
        <>
            <h3>Add new Transaction</h3>
            <div >
                                <InputGroup className='mt-4'>
                                    <InputGroup.Text>Text</InputGroup.Text>
                                    <Form.Control />
                                </InputGroup>
                                <InputGroup className='mt-4'>
                                    <InputGroup.Text>Amount</InputGroup.Text>
                                    <Form.Control />
                                </InputGroup>
                                <ButtonGroup className='mt-4'>
                                    <Button>Submit</Button>
                                </ButtonGroup>
                            </div>
        </>
    )
}
