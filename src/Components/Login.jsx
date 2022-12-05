import React, { useState } from 'react'
import {
    useNavigate
  } from 'react-router-dom'
  

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        console.log("Clicked "+username+" , "+password);
        if(username==='abc' && password==='123')
        {
            navigate('/home');
        }
    }

    return (
        <div>
            <input type="text" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <div>
                <button onClick={login}>Login</button>
                <span>or</span>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Login