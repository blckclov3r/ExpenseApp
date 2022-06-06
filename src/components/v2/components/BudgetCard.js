import React from 'react'
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap'
import { currencyFormatter } from '../../utils'

export default function BudgetCard({name, amount, max, onAddExpenseClick, gray, hideBtn,viewExpenseClick}) {

   const getProgressbar = (amount, max) =>{
        const ratio = (amount/max);
        if(ratio < 0.5){
            return 'primary'
        }
        if(ratio < 0.75){
            return 'warning';
        }
        return 'danger';
   }

   const classNames = [];
   if(parseInt(amount) > parseInt(max)){
       classNames.push('bg-danger','bg-opacity-10','shadow-sm');
   }
   else if(gray){
    classNames.push('bg-light','bg-opacity-10','shadow-sm');
   }
   else{
      classNames.push('shadow-sm');
   }
   

  return (
    <>
        <Card>
            <Card.Body className={classNames.join(' ')}>
                <Card.Title className='d-flex align-items-baseline fw-normal'>
                    <div className='me-auto'>{name}</div>
                    <div className='ms-auto d-flex align-items-baseline'>
                        <span className='me-1'> {currencyFormatter.format(amount)} </span>
                    { !isNaN(max) &&  <span className='text-mutes fs-6'>/ {currencyFormatter.format(max)}</span> }
                     </div>
                </Card.Title>
               { name !=="Uncategorized" && <ProgressBar className='round-pill' variant={getProgressbar(amount,max)} 
                    min={0}
                    max={max}
                    now={amount}
                /> }
               { !hideBtn &&  <Stack direction='horizontal' className='mt-4'>
                    <Button variant="danger" className="ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
                    <Button variant="primary  ms-2" onClick={viewExpenseClick}>View Expenses</Button>
                </Stack>}
                
            </Card.Body>
        </Card>
    </>
  )
}
