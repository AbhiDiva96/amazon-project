import React, {useState} from 'react'
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login shittttt...
     auth
     .signInWithEmailAndPassword(email, password)
     .then((auth) => {
            history.push('./')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it successfully create a new user with email and password
            console.log(auth);
        })
        .catch(error => alert(error.message))
        //do some fancy firebase register shittt....
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
        className="login_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt=""  />
      </Link>

      <div className="login_form">
        <h1 className='sing_In'>Sign in</h1>

         <h5 className='email_span'>Email or mobile number</h5>
           <input 
           value={email} onChange={e => setEmail(e.target.value)}
           className='email_input' type="text" />

            <h5 className='password_span'>Password</h5>
           <input type="password" 
           value={password} onChange={e => setPassword(e.target.value)}
           className="password_input" />

        <button type='submit'
        onClick={signIn}
        className="button_submit">Sign In</button>

        <p className='login_condition'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice Read terms and conditon very carefully.</p>

        <button type='submit'
        onClick={register}
        className='signUp'>Create your amazon account</button>
      </div>
    </div>
  )
}


export default Login
