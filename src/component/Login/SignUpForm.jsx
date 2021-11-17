import React from 'react';
import { useForm } from 'react-hook-form';
import { createAccount } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import toast from 'react-hot-toast';

const SignUpForm = ({handleResponse}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = ({email, password}) => {
        const loading = toast.loading('Please wait...');
        createAccount(email, password)
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
        <form onSubmit={handleSubmit(onSubmit)} class="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faUser}/></span>
                <input placeholder="Name" {...register("email", { required: true })} />
            </div>
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            <input className="iBtn" type="submit" value="sign Up"/>
            <p className="social-text">Or Sign up with social account</p>
            <SocialMedia handleResponse={handleResponse}/>
        </form>
    );
};

export default SignUpForm;