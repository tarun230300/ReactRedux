const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

// creating logger middleware
const reduxLogger = require ('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED '
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// ordercake function is an action
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}
// restockcake function is an action
function restockCake(qty=1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
// ordericecream function is an action
function orderIceCream(qty=1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
// restockicecream function is an action
function restockIceCream(qty=1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 20
// }

const initialCakeState = {
    numberOfCakes: 10
}
const initialIceCreamState = {
    numberOfIceCreams: 20
}
//  Writing Reducer for cake 
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return{
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state

    }
}
//  Writing Reducer for IceCream. 
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1,
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload
            }
        default:
            return state

    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

// printing the initial value of a cake  
console.log('Initial state', store.getState())

// printing the updated values of a cake 
const unsubscribe=store.subscribe(() => {})

// // ordering cake by calling ordercake function
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// // restocking the cakes by calling restockCake function.
// store.dispatch(restockCake())
// store.dispatch(restockCake())
// store.dispatch(restockCake())
// // store.dispatch(restockCake(3)) this is equals to the above 3 call in a single line

// // ordering cake by calling ordercake function
// store.dispatch(orderIceCream())
// store.dispatch(orderIceCream())
// store.dispatch(orderIceCream())

// // restocking the cakes by calling restockCake function.
// store.dispatch(restockIceCream())
// store.dispatch(restockIceCream())
// store.dispatch(restockIceCream())
// // store.dispatch(restockIceCream(3)) this is equals to the above 3 calls in a single line.

const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()
