import React from 'react';
import Post from '../MyPosts/Post/Post'
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    const postsElements = props.posts.map( post => <Post message={post.post} likesCounter={post.likesCounter} />);

    const newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);

        props.dispatch(action);
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={s.postsBlock}>
                
                <h3 className={s.header}>New post</h3>

            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost} className={s.btn}>Add post</button>
            </div>

            <h3 className={s.header}>My posts</h3>

            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;