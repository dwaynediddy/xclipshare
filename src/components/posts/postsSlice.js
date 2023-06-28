import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1', 
        title: "getting this going", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            heart: 0,
            thumbDown: 0
        }
    },
    
    {
        id: '2', 
        title: "second", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        date: sub(new Date(), {minutes: 24}).toISOString(),
        reactions: {
            heart: 0,
            thumbDown: 0
        }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            heart: 0,
                            thumbDown: 0
                        }
                    }
                }
            },
            reactionAdded(state, action) {
                const { postId, reaction } = action.payload
                const existingPost = state.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            }
        }
    }
})

export const selectAllPosts = state => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer