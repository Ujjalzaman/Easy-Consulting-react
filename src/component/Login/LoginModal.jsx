import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './LoginModal.css';
import "firebase/compat/auth";
import log from '../../Assets/log.svg';
import desk from '../../Assets/register.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { UserContext } from '../../App';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { handleSignOut } from './LoginManager';

const Form = () => {
  const [isSignUp, setSignUp] = useState(false);
  const { setUser } = useContext(UserContext);

  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" }};

  const handleResponse = (res) => {
    setUser(res);
    if(!res.error){
      toast.success('Successfully Logged In!');
      history(from);
    }
    if (res.email === "test@admin.com") {
      swal({
        title: "Warning!",
        text: "You have entered the admin panel for testing. Please don't abuse this facility!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(ok => {
          if (!ok) {
              handleSignOut()
                .then(res => {
                    setUser(res)
                    toast.error('Logged Out!');
                })
          }
        });
    }
  }
  
  return (
    <div className={`${ isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
        <Link to="/">
          <span className="pageCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
        </Link>
       <div className="forms-container">
         <div className="signIn-singUp">
            <SignInForm handleResponse={handleResponse}/>
            <SignUpForm handleResponse={handleResponse}/>
         </div>
       </div>

       <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
            </div>
            <img src={`${log}`} alt="" className="pImg"/>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
            </div>
            <img src={`${desk}`} alt="" className="pImg"/>
          </div>
       </div>
    </div>
  );
};

export default Form;