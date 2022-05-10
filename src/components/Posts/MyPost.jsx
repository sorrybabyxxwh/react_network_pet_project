import * as React from 'react';
import classes from './Post.module.css';
import Post from "./Post";
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../redux/profilePage-reducer";



const MyPost = (props) => {
    let PostsElements = props.posts.map(p => <Post message={p.message}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    debugger;
    return (
        <div>
            <h3>My Post</h3>
            <div className={classes.addNewPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add Post</button>
                </div>
            </div>
            <div>{PostsElements}</div>
        </div>
    );
}
export default MyPost;