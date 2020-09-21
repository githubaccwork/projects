import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.wallpaper} src="https://www.fotor.com/loopBannerImg/indexBannerImg/banner-01.jpg"/>
                {/* <img src="./wallpaper.png"/> */}
            </div>
            <div>
                <img src="./profile_photo.jpg"/>
                <p>Description</p>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;