import React, { useContext, useState } from 'react';
import { login } from '../../authContext/apiCalls';
import { AuthContext } from "../../authContext/AuthContext";
import {Navigate, useNavigate} from "react-router-dom";
import "./login.scss";

const Register = () => {

    const [remember, setRemember] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleremember = () => {
        setRemember(!remember);
    }
    const { dispatch } = useContext(AuthContext);

    const handleSubmit = () => {
        login({email, password}, dispatch);
    }
    
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">  
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                </div>
            </div>
            <div className="container">
                <div className="wrapper">
                    <h1>Sign In</h1>
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button className="signin" onClick={handleSubmit}>
                        Sign In
                    </button>
                    <div className="buttonbottom">
                        <div className="remember">
                            <input type="checkbox" checked={remember} onChange={handleremember}/>
                            <span>
                                Remember me
                            </span>
                        </div>
                        Need help?
                    </div>
                    <div className="bottom">
                        <span className="b1">
                            New to Netflix? 
                            <div className="signup">
                                Sign up now
                            </div>
                        </span>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
