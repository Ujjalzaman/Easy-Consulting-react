import React from 'react';
import { Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './Profile.css'
import userimg from '../../../Assets/user.svg';
import { handleSignOut } from '../../Login/LoginManager';
import { SET_USER, useAppContext } from '../../../context';
const Profile = () => {
    const { state:{user: { name, email, img }}, dispatch} = useAppContext()
    const signOut = () => {
        const loading = toast.loading('Please wait...');
        handleSignOut()
        .then(res => {
            toast.dismiss(loading);
            dispatch({type: SET_USER, payload: res})
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
                    onClick={signOut}
                    >Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;