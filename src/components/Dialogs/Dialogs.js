import React from 'react'
import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/messagesPage-reducer";


const Dialogs = (props) => {
    debugger;
    let state = props.messagesPage;
    //андефайед getState

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} /> );
    let newMessageText = state.newMessageText;


    let onSendMessage = () => {
      props.SendMessage();
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div className={classes.messageInput}>
                    <div className={classes.messageInputHolder}><textarea value={newMessageText} placeholder="Enter Your Message" onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>

            {/*<div className={classes.messageInput}>*/}
            {/*    <textarea value={newMessageText} onChange={onNewMessageChange}/>*/}
            {/*    <button onClick={addMessage}>Send</button>*/}
            {/*</div>*/}
        </div>
)
}
export default Dialogs;