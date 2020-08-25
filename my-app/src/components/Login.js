import React from "react";
 import Nav from './Nav'
import { useState } from 'react';
import styled from 'styled-components'
 
const StyledLogin = styled.div `


form {
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;

label{
    display:flex;
    flex-direction:column;

}
input{
    margin:2%;
}
button{
    margin:1%;
}
}

 `;

const Login = () => {


    const [Password, setPassword] = useState("");
    const [UserName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    }
     
    return (
        <StyledLogin>
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
        </StyledLogin>
      );
    }



 

 export default Login;
