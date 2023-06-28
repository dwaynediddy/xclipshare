import React from 'react'
import './style/home.css'
import Clip from '../components/Clip'
import PostsList from '../components/PostsList'
import AddPostForm from '../components/posts/AddPostForm'

const Home = () => {
  return (
    <div className='container'>
        <AddPostForm />
        <PostsList />
    </div>
  )
}

export default Home