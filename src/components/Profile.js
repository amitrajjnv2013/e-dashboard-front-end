import React from 'react';

const Profile=()=>{
    const auth = localStorage.getItem('user');
    return(
        <div className="profile">
            <h2>Currently store is operated by: { JSON.parse(auth).name} </h2>
            <h4>email id: { JSON.parse(auth).email}</h4>
        </div>
    )
}

export default Profile;