import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import userReducer from './reducers'

// const rootReducer = combineReducers({reducer: userReducer})

export const Store = configureStore({
    reducer: {
        user: userReducer
    }
})


