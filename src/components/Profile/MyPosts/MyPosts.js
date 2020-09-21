import React from 'react';
import Post from '../MyPosts/Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
                
                <h3 className={s.header}>New post</h3>

            <div>
                <textarea></textarea>
                <button className={s.btn}>Add post</button>
            </div>

            <h3 className={s.header}>My posts</h3>

            <div className={s.posts}>
                <Post message='Hi! How are you ?'/>
                <Post message='Hey! It is my first post!'/>
            </div>
        </div>
    );
}

export default MyPosts;