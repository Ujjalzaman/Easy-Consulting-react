import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
// import toast from 'react-hot-toast';
// import { UserContext } from '../../../App';
// import { handleSignOut } from '../../LogIn/LogIn/LoginManager';
import './Profile.css'
import img from '../../../Assets/user.svg';
const Profile = () => {
    // const {user: {name, email, img}, setUser} = useContext(UserContext);
    // const signOut = () => {
    //     const loading = toast.loading('Please wait...');
    //     handleSignOut()
    //     .then(res => {
    //         toast.dismiss(loading);
    //         setUser(res)
    //         toast.error('Logged Out!');
    //     })
    // }
    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>Profile</h2>
                <div className="profileInfo">
                    <img src={img} alt="" />
                    <h3>
                        {/* {name} */}
                        Name
                    </h3>
                    <h5>
                        {/* {email} */}
                        Email@mail.com
                    </h5>
                    <button className="mainBtn mt-3" 
                    // onClick={signOut}
                    >Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;