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
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;