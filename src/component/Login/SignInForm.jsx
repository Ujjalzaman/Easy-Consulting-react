import React from 'react';
import { useForm } from 'react-hook-form';
import { loginWithEmail } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import toast from 'react-hot-toast';


const SignInForm = ({handleResponse}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

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
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input defaultValue='admin@mail.com' placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input defaultValue="admin123" type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            {errors.password && <span className="text-warning">This field is required</span>}
            <input className="iBtn" type="submit" value="sign In"/>
            <p className="social-text">Or Sign in with social platforms</p>
            <SocialMedia handleResponse={handleResponse}/>
        </form>
    );
};

export default SignInForm;