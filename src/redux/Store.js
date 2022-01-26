import {  createStore  } from 'redux'
import "../pages/SignIn"


console.log("redux")

//state
const initialState = [{
    token: '',
    isLogged: false,
    datasUser: {}
}]


//action
const IS_LOGGED_ACTION = "IS_TOKEN_ACTION"
const DATAS_ACTIONS = "DATAS_ACTIONS"
const LOGOUT_ACTIONS = "LOGOUT_ACTIONS"


//reducer 
function funcReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOGGED_ACTION: 
            return [...state, {
                ...action.payload,
                isLogged: true,
            }]
        case DATAS_ACTIONS: 
            return [...state, {
                ...action.payload,
                datasUser: action.payload
            }]
        case LOGOUT_ACTIONS:
            return [...state, {
                token: '',
                isLogged: false,
                datasUser: {}
            }]
        default: 
            return state
    }
}


//store
const store = createStore(
    funcReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store