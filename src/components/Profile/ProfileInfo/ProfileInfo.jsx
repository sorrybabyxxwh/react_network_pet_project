import React from 'react';
import Avatar from '@mui/material/Avatar'
import {Typography} from '@mui/material';
import classes from './ProfileInfo.module.css'



const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img
                    src='https://dr.savee-cdn.com/things/6/2/2f8a7c1a26f12285452374.jpg'
                    alt="Sky"/>
            </div>
            <div className={classes.ava_desc}>
                <Avatar
                    src='https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    alt="Remy Sharp" sx={{width: 150, height: 150}}/>
                <div className={classes.desc}>
                    <Typography variant='h6' component="h6">Hello, My Name is Remy. I am a movie star)</Typography>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;