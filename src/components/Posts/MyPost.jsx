import * as React from 'react';
import classes from './Post.module.css';
import Post from "./Post";




const MyPost = (props) => {
    let PostsElements =
       props.posts.map(p => <Post message={p.message}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div>
            <h3>My Post</h3>
            <div className={classes.addNewPost}>
                <div className={classes.textInput}>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div>
                {/*<Post message = {posts[0].message} />*/}
                {PostsElements}
            </div>
        </div>

    );
}
export default MyPost;