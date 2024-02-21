import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    age: 0,
}

// export const setName = name => dispatch => {
//     dispatch({
//         type: SET_USER_NAME,
//         payload: name
//     })
// }

// export const setAge = age => dispatch => {
//     dispatch({
//         type: SET_USER_AGE,
//         payload: age
//     })
// }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        thisName(state, action){
             state.name = action.payload
        },
        thisAge(state, action) {
            state.age = action.payload
        }
    }
})

// function userReducer(state=initialState, action){
//     SET_USER_NAME: state => {
//         return {...state, name: action.payload}
//     }

//     SET_USER_AGE: state => {
//         return {...state, age: action.payload}
//     }
            
// }



export const { thisName, thisAge } = userSlice.actions

export default userSlice.reducer;




