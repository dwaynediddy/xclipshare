import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import '../style/reactionBtn.css'

import heartGif from '../gif/heart.gif'
import thumbDownGif from '../gif/thumbDown.gif'

const reactionEmoji = {
    heart: <img src={heartGif} alt='heart' />,
    thumbDown: <img src={thumbDownGif} alt='thumbsDown' />
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()
    
    const ReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        const onReactionClick = () => {
            dispatch(reactionAdded({ postId: post.id, reaction: name}))
        }
        return (
            <button
                key={name}
                type='button'
                className='reactionButton'
                onClicke={onReactionClick}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return <div>{ReactionButtons}</div>
}

export default ReactionButtons