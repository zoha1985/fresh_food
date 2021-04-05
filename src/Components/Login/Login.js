import React, { useContext, useState } from 'react';
import firebaseConfig from '../Card/Config';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

if (!firebase.apps === 0) {
     firebase.initializeApp(firebaseConfig); 
    }


const Login = () => {

    const [logededInUser, setLogededInUser] = useContext(UserContext);


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setUser] = useState({});
    console.log('insidenew user', newUser);
  
const handleGoogle = () => {
   
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    const {displayName,email,photoURL} = user;
    const newUserInfo = {displayName,email,photoURL};
    setUser(newUserInfo);
    setLogededInUser(newUserInfo);
    history.replace(from);
    // console.log('new user info information', newUserInfo)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage)
  });
}

    return (
        <div className="container">
            <div className="row text-center mt-5 bg-light p-5">
                <div className="col-md-12">
                    <h4 className="loginFont">This is a ligin page</h4>
                    <h5>Your Email : {newUser.email}</h5>
                    {/* <h5>Your name : {newUser.displayName}</h5> */}
                    <button className="p-2 " onClick={handleGoogle}> <GTranslateIcon /> Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;