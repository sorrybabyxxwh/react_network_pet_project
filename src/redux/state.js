const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state: {
        profilePage:{
            posts: [
                {message: 'Post Message', id: 1},
                {message: 'Post Message', id: 2},
                {message: 'Post Message', id: 3}
            ],
            newPostText: "hi There"
        },
        messagesPage:{
            dialogsData: [
                {name: 'Sara', id: 1},
                {name: 'Sasha', id: 2},
                {name: 'Antony', id: 3}
            ],
            messagesData: [
                {message: 'Hi', id: 1},
                {message: 'Bye', id: 2},
                {message: 'See you soon', id: 3}
            ]
        }

    },
    _rerenderEntireDOM () {
        console.log("state was changed")
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._rerenderEntireDOM = observer;
    },

    // _addPost ()  {
    //
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._rerenderEntireDOM(this._state);
    //
    // },
    // _updatePostText (newText)  {
    //     this._state.profilePage.newPostText = newText;
    //     this._rerenderEntireDOM(this._state);
    //
    // },

    dispatch (action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._rerenderEntireDOM(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireDOM(this._state);
        }
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostChangeActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}








export default store;
window.store = store;