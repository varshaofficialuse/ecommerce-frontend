import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate()

    function handleLogin(e){
        e.preventDefault();
        if(email && password){
            localStorage.setItem('token','mock-jwt-token');
            navigate('/dashboard');
            setAuth(localStorage.getItem('token'));
        }else{
            alert('Invalid Credentials');
        }
    }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login