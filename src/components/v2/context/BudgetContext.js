import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const BudgetContext  = React.createContext();

export function useBudgets(){
    return useContext(BudgetContext);
}


export const BudgetProvider = ({children}) =>{

    const [budgets, setBudgets] = useState(null);
    const [expenses, setExpenses] = useState(null);

    const getBudgetExpenses = (budgetId) =>{
        expenses.filter((expense)=>{
            return expense.budgetId === budgetId;
        })
    }
    
    const addExpenses = ({description, amount, budgetId}) =>{
        setExpenses(prevExpense => {
            return [...prevExpense, {
                id: uuidV4(), 
                description,
                amount,
                budgetId
            }];
        })
    } 
    const addBudget = ({name,max})=>{
        setBudgets(prevBudget => {
            if(prevBudget.find(budget => budget.name === name)){
                return prevBudget;
            }
            return [...prevBudget, {
                id: uuidV4(), 
                name,
                max
            }];
        })
    } 
    const deleteBudget = ({id}) =>{
        setBudgets(prevBudget =>{
            return prevBudget.filter(budget => budget.id !== id)
        })
    }

    const deleteExpense = ({id}) =>{
        setExpenses(prevExpense =>{
            return prevExpense.filter(expense => expense.id !== id);
        })
    }

    return <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>
        {children}
    </BudgetContext.Provider>
}