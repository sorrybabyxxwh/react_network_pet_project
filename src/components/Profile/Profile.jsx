import React from 'react';
import classes from './Profile.module.css'
import MyPost from "../Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "../Posts/Post";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>

        </div>
    )
}

export default Profile;