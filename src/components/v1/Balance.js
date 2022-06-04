


import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { GlobalContext } from './context/GlobalState'

export default function Balance() {
  const {transactions} =  useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((accumulator,amount)=>{
    return accumulator + amount;
  },0)

  return (

    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className='text-info'>Balance</Card.Title>
        <Card.Text>
          ${total.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
