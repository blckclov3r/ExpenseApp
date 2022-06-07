

import React, { useContext } from 'react'
import { currencyFormatter } from '../utils';
import { GlobalContext } from './context/GlobalState'

export default function Transaction({ item }) {

    const { deleteTransaction } = useContext(GlobalContext);


    const sign = item.amount < 0 ? '-' : '+'

    return (
        <>
            <li  className={item.amount < 0 ? 'list-group-item align-items-center d-flex justify-content-between  mb-1 shadow-sm' : 'list-group-item align-items-center d-flex justify-content-between mb-1 shadow-sm '}>
                <p className='mb-0'>{item.text} <span className={sign === '+' ? 'ms-2 fw-bold text-success' : 'ms-3 fw-bold text-danger'}>{sign}{currencyFormatter.format(Math.abs(item.amount))}</span> </p>
                <button className='btn btn-danger btn-sm ms-auto' onClick={() => { deleteTransaction(item.id) }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </li>
        </>
    )
}
