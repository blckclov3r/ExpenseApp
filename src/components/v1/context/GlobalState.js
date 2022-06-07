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
        {id: 1, text: 'Load', amount: -20},
        {id: 2, text: 'Load', amount: -60},
        {id: 3, text: 'Load', amount: -20},
        {id: 4, text: 'Load', amount: -20},
        {id: 5, text: 'Load', amount: -90},
        {id: 6, text: 'Load', amount: -70},
        {id: 7, text: 'Load', amount: -110},
        {id: 8, text: 'Load', amount: -300},
        {id: 9, text: 'Load', amount: -10},
        {id: 10, text: 'GCASH', amount: 1000},
        {id: 11, text: 'PAYMAYA', amount: 200}
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