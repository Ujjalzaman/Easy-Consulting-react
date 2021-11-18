import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './Profile.css'
import userimg from '../../../Assets/user.svg';
import { handleSignOut } from '../../Login/LoginManager';
import { UserContext } from '../../../App';
const Profile = () => {
    const {user: {name, email, img}, setUser} = useContext(UserContext);
    const signOut = () => {
        const loading = toast.loading('Please wait...');
        handleSignOut()
        .then(res => {
            toast.dismiss(loading);
            setUser(res)
            toast.error('Logged Out!');
        })
    }
    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>Profile</h2>
                <div className="profileInfo">
                    <img src={img ? img : userimg} alt="" />
                    <h3>
                        {name}
                    </h3>
                    <h5>
                        {email}
                    </h5>
                    <button className="mainBtn mt-3" 
                    onClick={handleSignOut}
                    >Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;