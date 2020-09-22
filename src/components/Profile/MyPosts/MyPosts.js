import React from 'react';
import Post from '../MyPosts/Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {

    const postsData = [
        {id: 1, post: 'Hi !How are you ?', likesCounter: 12},
        {id: 2, post: 'This is my first post.', likesCounter: 10},
        {id: 3, post: 'React is amazing !!!', likesCounter: 114},
        {id: 4, post: 'Cool...', likesCounter: 2},
        {id: 5, post: 'What is new ?', likesCounter: 0},
        {id: 6, post: ':)', likesCounter: 4}
    ];

    const postsElements = postsData.map( post => <Post message={post.post} likesCounter={post.likesCounter} />);

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