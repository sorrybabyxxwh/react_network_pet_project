import React from 'react'
import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let onSendMessage = () => {
      props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageCreator(body));
    }
    return <Dialogs updateNewMessageBody={onNewMessageChange} SendMessage={onSendMessage} messagesPage={state}/>
}
export default DialogsContainer;