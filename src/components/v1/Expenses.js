

import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { GlobalContext } from './context/GlobalState'

export default function Expenses() {

  const {transactions} = useContext(GlobalContext);

  const expense = transactions.filter(transaction => transaction.amount < 0);
  const totalExpense = expense.reduce((accumulator,itr)=>{
    return accumulator + itr.amount;
  }, 0)

  return (
    <Card  className="shadow-sm">
    <Card.Body>
        <Card.Title className='text-danger'>Expenses</Card.Title>
        <Card.Text>
           ${totalExpense * -1}
        </Card.Text>
    </Card.Body>
</Card>
  )
}
