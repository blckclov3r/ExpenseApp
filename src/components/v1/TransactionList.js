import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {

    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <div id='transactionList' className='h-100' >
            <ul className='list-group mb-4' >
                {transactions.map((item)=>(
                    <Transaction key={item.id} item={item} />
                ))}
            </ul>
            </div>
           
        </>
    )
}
