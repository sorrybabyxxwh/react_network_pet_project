import React from 'react';
import MyPost from "../Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "../Posts/MyPostContainer";



const Profile = (props) => {
debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer store={props.store}/>

        </div>
    )
}

export default Profile;