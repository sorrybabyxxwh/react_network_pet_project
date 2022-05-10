const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';




let initialState = {
        posts: [
            {message: 'Post Message', id: 1},
            {message: 'Post Message', id: 2},
            {message: 'Post Message', id: 3}
        ],
        newPostText: "hi There"
};

 const profilePageReducer = (state = initialState , action) => {
     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 message: state.newPostText
             };
             state.posts.push(newPost);
             state.newPostText = " ";
             break;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             break;
     }
     return state;
}


 export const addPostActionCreator = () => {
     return {type: ADD_POST}}
 export const updateNewPostChangeActionCreator = (text) =>{
     return {type: UPDATE_NEW_POST_TEXT, newText: text}}

export default profilePageReducer;