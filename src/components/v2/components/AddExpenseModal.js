
import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { KEY, useBudgets } from '../context/BudgetContext';

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {

  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();


  const { addExpenses, budgets } = useBudgets();

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpenses({

      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value
    })
    handleClose()
  }
  
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="description" className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" ref={descriptionRef} placeholder="Name" required />
          </Form.Group>
          <Form.Group controlId="amount" className='mb-2'>
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control type="number" ref={amountRef} placeholder="Amount" min={0} step={0.01} required />
          </Form.Group>
          <Form.Group controlId="budgetId" className='mb-2'>
            <Form.Label>Budget</Form.Label>
            <Form.Select type="number"
              defaultValue={defaultBudgetId}
              ref={budgetIdRef}  >
                     <option id={KEY.UNCATEGORIZED}>Uncategorized</option>
                  {budgets.map((budget)=>(
                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                  ))}
              </Form.Select>
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
