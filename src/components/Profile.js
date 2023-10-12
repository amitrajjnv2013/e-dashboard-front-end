import React from 'react';
import ProfileDeveloper from './ProfileDeveloper';
const Profile=()=>{
    const auth = localStorage.getItem('user');
    return(
        <div className='users'>
        <div className="profile">
            <h2 className="profile-user-bio">Currently store is operated by: { JSON.parse(auth).name} </h2>
            <h4 className="profile-user-bio">email id: { JSON.parse(auth).email}</h4>
        </div>
        <div className='developer-profile'>
            <ProfileDeveloper />
        </div>
        </div>
    )
}

export default Profile;