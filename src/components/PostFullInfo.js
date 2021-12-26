import { useContext } from 'react'
import '../css/PostFullInfo.css'
import { Context } from './App'
import Message from './Message'

import CommentList from './CommentList'

export default function PostFullInfo({post: {postId, author, date, title, content}, comments}) {
    
    const {backClickHandler} = useContext(Context);
    console.log('postId: ', postId)

    return (
        <div class="full-info">
            <h2>{author}</h2>
            <p>{date}</p>
            <h1>{title}</h1>
            <p>{content}</p>
            <CommentList comments = {comments}></CommentList>
            <button id="back-btn" onClick = {backClickHandler}>back</button>
            <Message postId={postId}></Message>
        </div>
    )
}