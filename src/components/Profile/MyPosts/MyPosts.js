import React from 'react';
import Post from '../MyPosts/Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                    New post
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you ?'/>
                <Post message='Hey! It is my first post!'/>
            </div>
        </div>
    );
}

export default MyPosts;