import {combineReducers, createStore} from 'redux'
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducersPack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer
});


const store = createStore(reducersPack)

window.store = store;

export default store;