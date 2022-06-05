import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetProvider } from './components/v2/context/BudgetContext';
// npm install bootstrap@5.2.0-beta1


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BudgetProvider>
    <App />
    </BudgetProvider>
);
