const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        dialogs: [
            {name: 'Sara', id: 1},
            {name: 'Sasha', id: 2},
            {name: 'Antony', id: 3}
        ],
        messages: [
            {message: 'Hi', id: 1},
            {message: 'Bye', id: 2},
            {message: 'See you soon', id: 3}
        ],
        newMessageText: ""
};
const messagesPageReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_TEXT:
             state.newMessageText = action.body;
             break;
         case SEND_MESSAGE:
             let body = state.newMessageText;
             state.newMessageText = '';
             state.messages.push({id: 4, message: body})
             break;
     };
     return state;
}


 export const sendMessageCreator = () => {return {type: SEND_MESSAGE}}
 export const updateNewMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body})
 export default messagesPageReducer;