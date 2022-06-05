import React from 'react'
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap'
import { currencyFormatter } from '../../utils'

export default function BudgetCard({name, amount, max, gray}) {

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
   }else{
      classNames.push('bg-light','shadow-sm');
   }
   

  return (
    <>
        <Card className='bg-light'>
            <Card.Body className={classNames.join(' ')}>
                <Card.Title className='d-flex align-items-baseline fw-normal'>
                    <div className='me-auto'>{name}</div>
                    <div className='ms-auto d-flex align-items-baseline'>
                        {currencyFormatter.format(amount)} /
                        <span className='text-mutes fs-6 ms-1'>{currencyFormatter.format(max)}</span></div>
                </Card.Title>
                <ProgressBar className='round-pill' variant={getProgressbar(amount,max)} 
                    min={0}
                    max={max}
                    now={amount}
                />
                <Stack direction='horizontal' className='mt-4'>
                    <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
                    <Button variant="outline-primary" className="ms-auto">View Expenses</Button>
                </Stack>
                
            </Card.Body>
        </Card>
    </>
  )
}
