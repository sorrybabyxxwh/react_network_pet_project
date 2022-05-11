import React from 'react'
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().messagesPage;
//             let onSendMessage = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageCreator(body));
//             }
//             return (
//                 <Dialogs updateNewMessageBody={onNewMessageChange}
//                          SendMessage={onSendMessage}
//                          messagesPage={store.getState().messagesPage}/>)
//             }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageCreator: (body) => {
            dispatch(updateNewMessageCreator(body))
        },
        SendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;