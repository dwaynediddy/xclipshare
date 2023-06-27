import { useState } from 'react'

const AddPostForm = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target)

  return (
    <Section>
        <h2>Add Post</h2>
        <form>
            <label htmlFor='postTitle'>Title</label>
            <input
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor='postContent'>Content</label>
            <input
                type='text'
                id='postConetent'
                name='postConetent'
                value={content}
                onChange={onContentChange}
            />
            <button type='submit'>Post</button>
        </form>
    </Section>
  )
}

export default AddPostForm