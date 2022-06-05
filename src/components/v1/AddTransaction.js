import React, {useContext, useState} from 'react'
import { GlobalContext } from './context/GlobalState';
import { v4 as uuid } from 'uuid';

export default function AddTransaction() {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');


    const {addTransaction} = useContext(GlobalContext);

    const addTransactionSubmit = (e) =>{
        e.preventDefault();

        if(text.trim() === '' || amount.trim() === ''){
            return;
        }

        const newTransaction = {
            id: uuid(),
            text: text,
            amount: isNaN(parseInt(amount)) ? 0 : parseInt(amount)
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('')
    }
    
    return (
        <>
            <h3 className='mt-2'>Add new Transaction</h3>
            <form onSubmit={addTransactionSubmit}>
                <div >
                    <div className='mb-3'>
                        <label htmlFor='text' className='form-label'>Text</label>
                        <input type="text" id='text' required value={text} onChange={(e)=>{setText(e.target.value)}} className='form-control' placeholder="Text" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='amount' className='form-label'>Amount</label>
                        <input type="number" min={0} step={0.01} required value={amount} onChange={(e)=>setAmount(e.target.value)} id='amount' className='form-control' placeholder="Amount" />
                    </div>
                    <button className="btn btn-primary mb-3">Add Transaction</button>
                </div>
            </form>
        </>
    )
}
