

import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'


export default function Transaction({ item }) {

    const { deleteTransaction} = useContext(GlobalContext);

    
    const sign = item.amount < 0 ? '-' : '+'

    return (
        <>
            <li key={item.id} className={item.amount < 0 ? 'list-group-item align-items-center d-flex justify-content-between list-group-item-danger mb-1 shadow-sm' : 'list-group-item align-items-center d-flex justify-content-between mb-1 shadow-sm'}>
                <p className='mb-0'>{item.text}: <span>{sign}${Math.abs(item.amount)}</span> </p>
                <button className='btn btn-danger btn-sm ms-auto' onClick={()=>{deleteTransaction(item.id)}}>X</button>
            </li>
        </>
    )
}
