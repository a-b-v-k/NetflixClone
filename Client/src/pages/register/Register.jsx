import { ArrowForwardIos } from '@material-ui/icons';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {

    const [Email, setEmail] = useState();
    const [Pass, setPass] = useState();
    const [Name, setName] = useState();
    const eref = useRef();
    const pref = useRef();
    const nref = useRef();
    const navigate = useNavigate();
    const handleemail = () => {
        setEmail(eref.current.value);
        console.log(Email);
    }

    const handlesubmit = async (event) => {
        event.preventDefault();
        setPass(pref.current.value);
        setName(nref.current.value);
        console.log(Name, Pass)

        try {
            await axios.post("auth/register", {"email": Email, "username": Name, "password": Pass});
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">  
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                    <button className="loginbutton">
                        <Link to="/login" className="link">
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="h1">
                    Unlimited movies, TV shows and more
                </div>
                <div className="h2">
                    Watch anywhere, Cancel anytime.
                </div>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!Email ? (
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={eref}/>
                        <button className="registerbutton" onClick={handleemail}>
                            Get Started
                            <ArrowForwardIos />
                        </button> 
                    </div>
                    ) : (
                    <form className="input" noValidate>
                        <input type="text" placeholder="Username" ref={nref}/>
                        <input type="password" placeholder="Password" ref={pref}/>
                        <button className="registerbutton" onClick={handlesubmit}>
                            Start
                            <ArrowForwardIos />
                        </button> 
                    </form>
                    )}
            </div>
        </div>
    )
}

export default Register
