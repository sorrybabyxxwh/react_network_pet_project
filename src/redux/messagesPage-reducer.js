const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messagesPageReducer = (state, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_TEXT:
             state.newMessageText = action.body;
             break;
         case SEND_MESSAGE:
             let body = state.newMessageText;
             state.newMessageText = '';
             state.messages.push({id: 4, message: body})
             break;
     }
     return state;
}


 export const sendMessageCreator = () => {return {type: SEND_MESSAGE}}
 export const updateNewMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body})
 export default messagesPageReducer;