import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'coach'},
    {id: '1', name: 'manager'},
    {id: '2', name: 'player'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer