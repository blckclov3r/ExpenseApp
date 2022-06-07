
import React from 'react'
import { Button, Modal,  Stack } from 'react-bootstrap'
import { currencyFormatter } from '../../utils';
import { KEY, useBudgets } from '../context/BudgetContext';

export default function ViewExpensesModal({ budgetId, handleClose }) {


  const { getBudgetExpenses, budgets, deleteExpense, deleteBudget } = useBudgets();

  const expenses = getBudgetExpenses(budgetId);

  const budget = KEY.UNCATEGORIZED === budgetId ?
          {name: KEY.UNCATEGORIZED, id: KEY.UNCATEGORIZED} : budgets.find( b => b.id === budgetId)

  return (
    <Modal centered show={budgetId} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title >
           <h3 className='d-flex align-items-baseline'>Expenses - <span className='fw-normal fs-5 ms-1'>{budget?.name}</span></h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
         <Stack direction="vertical">
            {expenses.map((item)=>(
                <Stack direction="horizontal" gap="2" key={item.id} className="mb-2 ">
                    <div className='me-auto fs-4'>{item.description}</div>
                    <div className='fs-5'>{ currencyFormatter.format(item.amount)}</div>
                    <Button variant="outline-danger" onClick={()=>{
                      deleteExpense(item)
                    }} className='fs-6'>&times;</Button>
                </Stack>
            ))}
         </Stack>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          { (budgetId !== KEY.UNCATEGORIZED) && <Button variant="danger" type='submit' onClick={()=>{
              deleteBudget(budget)
              handleClose()
          }  }>Delete</Button>  }
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}
