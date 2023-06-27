import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: "getting this going", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"},
    {id: 2, title: "second", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}
]

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }

    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer