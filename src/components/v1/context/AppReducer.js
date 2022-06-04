import { KEY } from "./GlobalState";


const AppReducer =  (state,action) => {
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
        }
        
           
        default:{
            return state;
        }
        
    }
}

export default AppReducer;
