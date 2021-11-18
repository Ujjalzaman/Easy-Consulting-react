import React from 'react';
import { useForm } from 'react-hook-form';
import { loginWithEmail } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';
import ifoIcon from '../../Assets/info.svg';

const SignInForm = ({handleResponse}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false);
    }, 10000)


    const onSubmit = ({email, password}) => {
        const loading = toast.loading('Please wait...');
        loginWithEmail(email, password)
        .then(res => {
            if(res.error){
                toast.dismiss(loading);
                toast.error(res.error)
            }
            handleResponse(res)
            toast.dismiss(loading);
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
            <Toast show={show} onClose={() => setShow(!show)} className="signInToast">
                <Toast.Header>
                    <img src={`${ifoIcon}`} className="circle mr-2 toastIcon" alt=""/>
                    <strong className="mr-auto">Important Info</strong>
                </Toast.Header>
                <Toast.Body>Use this account to sign in as a admin, to test admin panel. Sign in with different account as a user</Toast.Body>
            </Toast>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input defaultValue='test@admin.com' placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input defaultValue="asdf1234" type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            {errors.password && <span className="text-warning">This field is required</span>}
            <input className="iBtn" type="submit" value="sign In"/>
            <p className="social-text">Or Sign in with social platforms</p>
            <SocialMedia handleResponse={handleResponse}/>
        </form>
    );
};

export default SignInForm;