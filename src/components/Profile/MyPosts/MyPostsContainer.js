import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return (<MyPosts 
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.postsData}
                updateNewPostText={state.profilePage.newPostText} />);
};

export default MyPostsContainer;