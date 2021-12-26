import { createStore } from 'redux'
import "../pages/SignIn"


console.log("redux")

//state
const initialState = [{
    token: '',
    isLogged: false,
}]


//action
const IS_TOKEN_ACTION = "IS_TOKEN_ACTION"


//reducer 
function funcReducer(state = initialState, action) {
    switch (action.type) {
        case IS_TOKEN_ACTION: 
            return [...state, {
                ...action.payload,
                isLogged: true,
            }]
            
        default: 
            return state
    }
}

//store
const store = createStore(funcReducer)

export default store