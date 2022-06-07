import React, {  useContext, useReducer } from "react"


import AppReducer from "./AppReducer";


export const KEY = {
    DELETE_TRANSACTION: 'delete_transaction',
    ADD_TRANSACTION: 'add_transaction'
}

// Initial State | dummyText


// create context initialState
export const GlobalContext = React.createContext();

export function useGlobal(){
    return useContext(GlobalContext);
}

const initialState = {

    transactions: [
        // {id: 1, text: 'Flower', amount: -20},
        // {id: 2, text: 'Salary', amount: 300},
        // {id: 3, text: 'Book', amount: -10},
        // {id: 4, text: 'Camera', amount: 150}
    ]
}

// provider component
export const GlobalProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id)=>{
        dispatch({
            type: KEY.DELETE_TRANSACTION,
            payload: id
        });
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type: KEY.ADD_TRANSACTION,
            payload: transaction
        })
    }

    return <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
}