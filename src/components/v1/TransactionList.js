import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import Transaction from './Transaction';
import { v4 as uuid } from 'uuid';
export default function TransactionList() {

    const {transactions} = useContext(GlobalContext);


    return (
        <>
            <div id='transactionList' className='h-100' >
            <ul className='list-group mb-4' >
                {transactions.map((item,index)=>(
                    <Transaction key={uuid()+"-"+index} item={item} />
                ))}
            </ul>
            </div>
           
        </>
    )
}
