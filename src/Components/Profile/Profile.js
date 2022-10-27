import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const {displayName,email, photoURL} =user;
    return (
        <div>
            
            <div>
                <img src={photoURL} alt="" />
            </div>
            <div>
                <h1>name: {displayName}</h1>
                <h1>email: {email}</h1>
            </div>


        </div>
    );
};

export default Profile;