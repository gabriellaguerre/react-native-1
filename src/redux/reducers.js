import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, name: 'gus', age:'49' },
    {id: 2, name: 'hila', age: '30'},
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        person(state, action){
            state.push(action.payload)
        },
       
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



export const { person } = usersSlice.actions

export default usersSlice.reducer;




