

import React from 'react'
import { KEY, useBudgets } from '../context/BudgetContext'
import BudgetCard from './BudgetCard'

export default function UncategorizedBudgetCard(props) {
 
   const {getBudgetExpenses} = useBudgets();
   
   const amount = getBudgetExpenses(KEY.UNCATEGORIZED).reduce((total, expense)=>{
            return total + expense.amount;
   },0)
   if(amount === 0) return null
  return (
     <BudgetCard name="Uncategorized" amount={amount}  {...props} />
  )
}
