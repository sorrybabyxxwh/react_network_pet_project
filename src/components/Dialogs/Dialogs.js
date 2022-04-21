import React from 'react'
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements
        = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements
        = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

            <div className={classes.messageInput}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
)
}
export default Dialogs;