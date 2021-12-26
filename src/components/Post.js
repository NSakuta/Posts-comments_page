import { useContext } from 'react'
import '../css/Post.css'
import { Context } from './App'

export default function Post({post: {postId, author, date, title, shortDesc, comments}}) {
    
    const {onCommentsClickHandler} = useContext(Context);
    
    return (
        <div class="post" id={postId}>
            <h5>{author}</h5>
            <p>{date}</p>
            <h1>{title}</h1>
            <p>{shortDesc}</p>
            <button onClick = {() => onCommentsClickHandler(postId)}>comments: {comments.length}</button>
        </div>
    )
}