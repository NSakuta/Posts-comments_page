import '../css/App.css';
import { getPosts } from '../store.js'
import React from 'react';
import PostList from './PostList';
import PostFullInfo from './PostFullInfo';
import CommentList from './CommentList';

export const Context = React.createContext();
export default class App extends React.Component {

  state = {
    posts: getPosts(),
    postFullInfo: null
  }

  onCommentsClickHandler = (id) => {
    const newPosts = [...this.state.posts]
    const findPostById = newPosts.find(el => el.postId === id);
    console.log('findPostById - onCommentsClickHandler: ', findPostById.comments)

    this.setState({...this.state, postFullInfo: findPostById});
  }
  backClickHandler = () => {
    this.setState({...this.state, postFullInfo: null});
  }

  sendMessageClickHanler = (postId) => {
    const newPosts = [...this.state.posts]
    const findPostById = newPosts.find(el => el.postId == postId);

    const input = document.querySelector('input').value;
    const text = document.querySelector('textarea').value;
    console.log('text: ', text);
    console.log('input: ', input);
    console.log('findPostById.comments: ', findPostById.comments)
    findPostById.comments.push({
      text: text,
      author: input
    })
    this.setState({...this.state, findPostById});
    <CommentList></CommentList>
  }
 
  render() {
    return (
      <div className="App">
        <Context.Provider value = {{
          onCommentsClickHandler: this.onCommentsClickHandler,
          backClickHandler: this.backClickHandler,
          sendMessageClickHanler: this.sendMessageClickHanler
        }}>
          {
            this.state.postFullInfo ? <PostFullInfo post={this.state.postFullInfo} comments={this.state.postFullInfo.comments}></PostFullInfo> : <PostList posts={this.state.posts}></PostList>
          }
          </Context.Provider>
      </div>
    );
  }
  
}

