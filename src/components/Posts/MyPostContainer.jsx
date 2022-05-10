import * as React from 'react';
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../redux/profilePage-reducer";
import MyPost from './MyPost'



const MyPostContainer = (props) => {
    debugger;
    let state = props.store.getState();
    let OnAddPost = () => {
        props.store.dispatch(addPostActionCreator());

    }
    let onPostChange = (text) => {
        let action = updateNewPostChangeActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPost updateNewPostText ={onPostChange}
                    addPost={OnAddPost} posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />);
}
export default MyPostContainer;