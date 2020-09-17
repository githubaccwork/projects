import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="./wallpaper.png"/>
            </div>
            <div>
                <img src="./profile_photo.jpg"/>
                <p>Description</p>
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;