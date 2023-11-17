 const store = require('./app/store')
 const cakeActions = require('./feature/cake/cakeSlice') .cakeActions
 const icecreamActions = require('./feature/icecream/icecreamSlice').icecreamActions

 console.log('Initial stage', store.getState())
 const unsubscribe = store.subscribe(() => {
   
 })

 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.restocked(3))

 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.restocked(2))


 unsubscribe()
