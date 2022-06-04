


import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { currencyFormatter } from '../utils';
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
          {currencyFormatter.format(total)}
          
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
