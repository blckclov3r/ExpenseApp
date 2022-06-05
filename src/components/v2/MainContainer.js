


import React from 'react'
import { Container, Stack, Button } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'

export default function MainContainer() {
  return (
    <Container className='mt-4'>
        <Stack direction="horizontal" gap="2" className='mb-4'>
            <h3 className='me-auto'>Budgets</h3>
            <Button variant="primary" className="ms-auto">Add Budget</Button>
            <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap:"1rem", alignItems: "flex-start"
        }}>
          <BudgetCard name="Entertainment" amount="500" max="1000" />
        </div>
    </Container>
  )
}
