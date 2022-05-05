import * as React from 'react';
import classes from './Post.module.css';
import Post from "./Post";
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../redux/profilePage-reducer";



const MyPost = (props) => {
    let PostsElements =
       props.posts.map(p => <Post message={p.message}/>);

    let newPostElement = React.createRef();


    let addPost = () => {

        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
        // props.updatePostText("");
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostChangeActionCreator(text);
        props.dispatch(action)
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
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div>
                {/*<Post message = {posts[0].message} />*/}
                {PostsElements}
            </div>
        </div>

    );
}
export default MyPost;