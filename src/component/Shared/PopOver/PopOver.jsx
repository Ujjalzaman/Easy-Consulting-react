import React, { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import './PopOver.css';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import { handleSignOut } from '../../Login/LoginManager';

const PopOver = () => {
    const { user: {name,email, img}, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
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
        <div >
            <img src={img} alt="" onClick={handleClick} className="popImg"/>
             <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <div className="text-center">
                        <img src={img} alt="" className="popUserImg"/>
                        <p className="userName">{`${name}`}</p>
                        <p className="userEmail">{email}</p>
                        <Button variant="outline-danger" size="sm" onClick={signOut}>Log out</Button>
                    </div>
                 </Popover> 
            </Overlay> 
        </div>
    );
};

export default PopOver;