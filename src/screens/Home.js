import React from 'react'
import './style/home.css'
// import Clip from '../components/Clip'
import PostsList from '../components/PostsList'

const Home = () => {
  return (
    <div className='container'>
        <PostsList />
    </div>
  )
}

export default Home