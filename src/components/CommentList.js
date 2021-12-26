import Comment from "./Comment"

export default function CommentList({comments}) {
    console.log('comments: ', comments);
    return (
        <div className="comment-list">
            {
                comments.map((el) => 
                    <Comment comment = {el}>                       
                    </Comment>)
            }
        </div>
    )
}