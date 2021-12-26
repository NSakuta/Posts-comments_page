import Post from "./Post";

export default function PostList({posts}) {
    return (
        <div>
            {posts.map((post) =>
                <Post key = {post.postId}
                    id = {post.postid}
                    post = {post}>
                </Post>)}
        </div>
    )
}
