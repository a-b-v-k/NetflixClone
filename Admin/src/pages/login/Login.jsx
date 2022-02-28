import React, { useState } from 'react';
import { useContext } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import "./login.css"

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    
    const handlelogin = (event) => {
        event.preventDefault();
        login({email, password}, dispatch);
    }

    return <div className='login'>
        <form className="loginform">
            <input type="text" className="logininput" placeholder='email' onChange={(e) => setemail(e.target.value)}/>
            <input type="password" className="logininput" placeholder='password' onChange={(e) => setpassword(e.target.value)}/>
            <button className='loginbutton' onClick={(event) => handlelogin(event)} disabled={isFetching}>Login</button>
        </form>
    </div>;
};

export default Login;
