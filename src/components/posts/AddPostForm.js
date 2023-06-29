import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

import '../style/form.css'

const AddPostForm = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ userId, setUserId ] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const dispatch = useDispatch()

    const onSubmit = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
                setTitle('')
                setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add Post</h2>
        <form className="form-container">
            <label htmlFor='postTitle'>Title:</label>
            <input
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor='postAuthor'>Author:</label>
            <select 
                id='postAuthor'
                value={userId}
                onChange={onAuthorChange}
            >
                <option value=''></option>
                {usersOptions}
            </select>
            <label htmlFor='postContent'>Content:</label>
            <textarea
                type='text'
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChange}
            />
            <button 
            onClick={onSubmit}
            type='button'
            disabled={!canSave}
            >Post</button>
        </form>
    </section>
  )
}

export default AddPostForm