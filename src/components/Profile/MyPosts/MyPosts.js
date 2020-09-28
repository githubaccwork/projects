import React from 'react';
import Post from '../MyPosts/Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    const postsElements = props.posts.map( post => <Post message={post.post} likesCounter={post.likesCounter} />);

    return (
        <div className={s.postsBlock}>
                
                <h3 className={s.header}>New post</h3>

            <div>
                <textarea></textarea>
                <button className={s.btn}>Add post</button>
            </div>

            <h3 className={s.header}>My posts</h3>

            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;