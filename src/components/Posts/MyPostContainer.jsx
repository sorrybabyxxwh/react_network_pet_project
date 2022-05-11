import * as React from 'react';
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../redux/profilePage-reducer";
import MyPost from './MyPost'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostChangeActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;