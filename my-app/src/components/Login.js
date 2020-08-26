import React from 'react';
import Nav from './Nav'
import { useState } from 'react';


const Login = () => {


    const [Password, setPassword] = useState("");
    const [UserName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    }
     
    return (
        <div>
            <Nav/>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
            
            <label>
            Username:
            <input
              name="userName"
              type="UserName"
              value={UserName}
              onChange={e => setUserName(e.target.value)}
              required />
          </label>
    
    
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={Password}
              onChange={e => setPassword(e.target.value)}
              required />
          </label>
    
          <button>Submit</button>
        </form>
        </div>
      );
    }



 

 export default Login;
