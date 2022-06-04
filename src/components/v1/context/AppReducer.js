import { KEY } from "./GlobalState";


export default (state,action) => {
    switch(action.type){
        
        case KEY.DELETE_TRANSACTION :{
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id 
                    !== action.payload)
            }
        }
        
        case KEY.ADD_TRANSACTION:{
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            }
            return;
        }
        
           
        default:{
            return state;
        }
        
    }
}

