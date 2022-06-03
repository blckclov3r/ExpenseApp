

import React from 'react'
import { Card } from 'react-bootstrap'

export default function Expenses() {
  return (
    <Card  className="shadow-sm">
    <Card.Body>
        <Card.Title className='text-danger'>Expenses</Card.Title>
        <Card.Text>
            $1.00
        </Card.Text>
    </Card.Body>
</Card>
  )
}
