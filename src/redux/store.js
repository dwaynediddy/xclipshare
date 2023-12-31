import { configureStore } from '@reduxjs/toolkit' 
import postsReducer from '../components/posts/postsSlice'
import usersReducer from '../components/users/usersSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
})