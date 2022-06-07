


import React, { useState } from 'react'
import { Container, Stack, Button } from 'react-bootstrap'
import AddBudgetModal from './components/AddBudgetModal'
import AddExpenseModal from './components/AddExpenseModal'
import BudgetCard from './components/BudgetCard'
import TotalBudget from './components/TotalBudget'
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard'
import ViewExpensesModal from './components/ViewExpensesModal'
import { KEY, useBudgets } from './context/BudgetContext'

export default function MainContainer() {

  const [budgetModal, setBudgetModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);
  const [expenseModalBudgetId, setExpenseModalBudgetId] = useState(false)
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  const openAddExpenseModal = (budgetId) => {
    setExpenseModal(true)
    setExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <Container className='mt-4'>
        <Stack direction="horizontal" gap="2" className='mb-4'>
          <h3 className='me-auto'>Budgets</h3>
          <Button variant="primary" className="ms-auto" onClick={() => { setBudgetModal(true) }}>Add Budget</Button>
          <Button variant="warning" onClick={openAddExpenseModal}>Add Expense</Button>
        </Stack>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem", alignItems: "flex-start"
        }}>
          {budgets.map((item) => {
            const amount = getBudgetExpenses(item.id)
            const totalAmount = amount.reduce((accum, itr) => {
              return accum + itr.amount;
            }, 0)
            return <BudgetCard
              key={item.id}
              name={item.name}
              amount={totalAmount}
              max={item.max}
              onAddExpenseClick={() => { openAddExpenseModal(item.id) }}
              viewExpenseClick={() => setViewExpenseModalBudgetId(item.id)}
            />
          })}
          <UncategorizedBudgetCard onAddExpenseClick={openAddExpenseModal} viewExpenseClick={() => setViewExpenseModalBudgetId(KEY.UNCATEGORIZED)} />
          <TotalBudget />
        </div>


      </Container>
      <AddBudgetModal show={budgetModal} handleClose={() => { setBudgetModal(false) }} />
      <AddExpenseModal
        show={expenseModal}
        defaultBudgetId={expenseModalBudgetId}
        handleClose={() => { setExpenseModal(false) }} />

      <ViewExpensesModal
        budgetId={viewExpenseModalBudgetId}
        handleClose={() => { setViewExpenseModalBudgetId() }} />

    </>

  )
}
