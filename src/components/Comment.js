import '../css/Comment.css'

export default function Comment({comment: {author, text}}) {
    return (
        <div className="comment">
            <h1>{author}</h1>
            <p>{text}</p>
        </div>
    )
}