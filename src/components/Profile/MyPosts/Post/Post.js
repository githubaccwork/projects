import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://outdoors.campmor.com/wp-content/uploads/2011/12/bear-waving-000012390351-200x1801.jpg"/>
            Post 1
            <p>Like</p>
        </div>
    );
}

export default Post;