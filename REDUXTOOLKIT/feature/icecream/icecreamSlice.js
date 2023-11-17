const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--
        },
        restocked: (state, actions) => {
            state.numOfIcecreams += actions.payload
        }
    }
})

module.exports = icecreamSlice.reducer  //exporting reducer as default export.
module.exports.icecreamActions = icecreamSlice.actions // exporting actions as named export.
