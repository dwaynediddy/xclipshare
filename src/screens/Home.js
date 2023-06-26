import React from 'react'
import './style/home.css'
import Clip from '../components/Clip'

const Home = () => {
  return (
    <div className='container'>
        <h2>clips</h2>
        <div className='scroller'>
            <div className='posts'>
                <Clip />
            </div>
        </div>
    </div>
  )
}

export default Home