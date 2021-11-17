// import firebase from 'firebase/app';
// import * as firebase from "firebase/app"
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
// import "firebase/auth";
import firebaseConfig from "../../firebaseBaseConfig";
import jwt_decode from "jwt-decode";
import userImg from '../../Assets/user.svg';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const setToken = () => {
  firebase.auth().currentUser.getIdToken(true)
  .then(function(idToken) {
    localStorage.setItem('token', idToken);
  })
}

export const loginWithProvider = (provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then( res => {
        setToken();
        return handleResponse(res);
    }).catch( error  => {
        const message = {
          error: error.message
        }
        return message;
    });
};

export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( res => {
      setToken();
      return handleResponse(res);
    })
    .catch( error  => {
      const message = {
        error: error.message
      }
      return message;
    });
}

export const loginWithEmail = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then( res => {
    setToken();
    return handleResponse(res);
  })
  .catch( error => {
      const message = {
      error: error.message
      }
      return message;
  });
}

const defaultName = (str) => {
  let myStr = str
  let firstWord = myStr.substring(0, 4)
  return firstWord;
}

const handleResponse = (res) => {
  const {displayName, email, photoURL} = res.user;
  const userInfo = {
    isSignedIn: true,
    name: displayName || defaultName(email),
    email: email,
    img: photoURL || userImg,
  }
  return userInfo;
}

export const getDecodedUser = () => {
  const token = localStorage.getItem('token');
  if (!token) {
      return {};
  }
  const { name, picture, email } = jwt_decode(token);
  const decodedUser = {
      isSignedIn: true,
      name: name || defaultName(email),
      email: email,
      img: picture || userImg,
  }
  return decodedUser;
}

export const handleSignOut = () => {
  return firebase.auth().signOut()
    .then(() => {
        localStorage.removeItem('token');
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            img: ''
        }
        return signedOutUser;
      })
}
