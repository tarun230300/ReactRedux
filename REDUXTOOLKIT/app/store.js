const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../feature/cake/cakeSlice')
const icecreamReducer = require('../feature/icecream/icecreamSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
 })
 module.exports = store