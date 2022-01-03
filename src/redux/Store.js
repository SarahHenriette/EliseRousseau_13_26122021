import {  createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk"
import "../pages/SignIn"


console.log("redux")

//state
const initialState = [{
    token: '',
    isLogged: false,
    datasUser: {}
}]

// const datasState= [{
//     datas: {}
// }]


//action
const IS_TOKEN_ACTION = "IS_TOKEN_ACTION"
const DATAS_ACTIONS = "DATAS_ACTIONS"


//reducer 
function funcReducer(state = initialState, action) {
    switch (action.type) {
        case IS_TOKEN_ACTION: 
            return [...state, {
                ...action.payload,
                isLogged: true,
            }]

        case DATAS_ACTIONS: 
            return [...state, {
                datasUser: action.payload
            }]
        default: 
            return state
    }
}


// const IS_DATAS_ACTION = "IS_DATAS_ACTION"

// function datasReducer(state = datasState, action) {
//     switch (action.type) {
//         case IS_DATAS_ACTION:
//             return [...state, {
//                 ...action.payload,
//             }]
//         default: 
//             return state
//     }
// }

// const rootReducer = combineReducers({
//     funcReducer,
//     datasReducer,
// })

//store
const store = createStore(
    funcReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store