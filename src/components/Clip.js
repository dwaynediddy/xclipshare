import { useState } from 'react'
import './style/clip.css'

import videoGif from '../gif/film-wired-outline.gif'
import commentGif from '../gif/comment.gif'
import heartGif from '../gif/heart.gif'
import thumbDownGif from '../gif/thumbDown.gif'

const Clip = () => {
    const [ showInput, setShowInput ] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleCommentButton = () => {
        setShowInput(!showInput)
    }

    const handleInputChange = e => {
        setInputValue(e.target.value)
    }

  return (
    <div className='container'>
        <div className='clip'>
            <img src={videoGif} alt='gif' />
            <div className='commentSecionHead'>
                <button
                    className='commentButton' 
                    onClick={handleCommentButton}>
                        <img
                            className='buttonGif' 
                            src={commentGif} alt='gif' 
                        />
                    </button>
                {showInput && (
                    <div className='inputText'>
                        <input 
                        className='commentInput'
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange}
                        />
                    </div>
                )}
                <img src={heartGif} alt='gif' />
                <img src={thumbDownGif} alt='gif' />
            </div>
        </div>
        <div className='commentSection'>
        </div>
    </div>
  )
}

export default Clip