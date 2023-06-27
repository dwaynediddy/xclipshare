import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './posts/postsSlice'

const AddPostForm = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target)

    const dispatch = useDispatch()

    const onSubmit = () => {
        if(title && content) {
            dispatch(postAdded({ 
                id: nanoid(),
                title: title, 
                content: content
            })
            )
                setTitle('')
                setContent('')
        }
    }

  return (
    <section>
        <h2>Add Post</h2>
        <form>
            <label htmlFor='postTitle'>Title:</label>
            <input
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor='postContent'>Content:</label>
            <input
                type='text'
                id='postConetent'
                name='postConetent'
                value={content}
                onChange={onContentChange}
            />
            <button 
            onClick={onSubmit}
            type='submit'
            >Post</button>
        </form>
    </section>
  )
}

export default AddPostForm