import { useContext } from 'react'
import '../css/Message.css'
import { Context } from './App'

export default function Message(postId) {
    const {sendMessageClickHanler} = useContext(Context);

    const id = JSON.stringify(postId).split(':')[1].match(/(\d+)/)[0];
    console.log('postId in Message: ', id)
    return (
        <div className="message">
            <h1>Leave your message</h1>
            <input placeholder="type your name"></input>
            <textarea placeholder="type your message"></textarea>
            <button onClick={() => sendMessageClickHanler(id)}>send</button>
        </div>
    )
}