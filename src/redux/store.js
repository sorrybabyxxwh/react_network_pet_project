import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {

            posts: [
                {message: 'Post Message', id: 1},
                {message: 'Post Message', id: 2},
                {message: 'Post Message', id: 3}
            ],
            newPostText: "hi There"
        },
        messagesPage: {
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
        },
        sidebar: {}

    },
    _rerenderEntireDOM() {
        console.log("state was changed")
    },

    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireDOM = observer;
    },
    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireDOM(this._state);
    }
}










export default store;
window.store = store;