import React from 'react';
import classes from './Profile.module.css'
import MyPost from "../Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "../Posts/Post";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost posts={props.state.posts}  />

        </div>
    )
}

export default Profile;