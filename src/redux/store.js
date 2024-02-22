import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import usersReducer from './reducers'

// const rootReducer = combineReducers({reducer: userReducer})

export const Store = configureStore({
    reducer: {
        users: usersReducer
    }
})


