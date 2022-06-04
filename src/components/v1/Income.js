

import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { currencyFormatter } from '../utils';
import { GlobalContext } from './context/GlobalState';
export default function Income() {
  const {transactions} = useContext(GlobalContext);

  // const income = transactions.filter(item => item.amount > 0);
  // const totalIncome = income.reduce((acc,itr) => acc + itr.amount,0)

  const totalIncome = transactions.filter(item => item.amount > 0)
                      .reduce((acc,itr)=> acc + itr.amount,0);


  return (
    <Card  className="shadow-sm">
    <Card.Body>
        <Card.Title className='text-success'>Income</Card.Title>
        <Card.Text>
            {currencyFormatter.format(totalIncome)}
        </Card.Text>
    </Card.Body>
</Card>
  )
}
