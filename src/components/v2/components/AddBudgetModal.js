
import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets } from '../context/BudgetContext';

export default function AddBudgetModal({ show, handleClose }) {
  
  const nameRef = useRef();
  const maxRef = useRef();

  const { addBudget } = useBudgets();

  const handleSubmit = (e) => {
    e.preventDefault();

    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value)
    })
    handleClose()
  }
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name" className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} placeholder="Name" required />
          </Form.Group>
          <Form.Group controlId="max" className='mb-2'>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" ref={maxRef} placeholder="Spend" min={0} step={0.01} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type='submit'>Add Budget</Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
