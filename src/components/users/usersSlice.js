import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'bob'},
    {id: '1', name: 'billy'},
    {id: '2', name: 'bobert'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer