import React, { useState } from "react";
 import Nav from './Nav';
 import styled from 'styled-components';

 
 

 const StyledRegister = styled.div `


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

const Register = () => {


    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
    }
     
    return (
        <StyledRegister>
            <Nav/>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
    
          <label>
            Email:
            <input
              name="Email"
              type="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required />
          </label> 
          <br/>
    
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required />
          </label> 
          <br/>
    
          <label>
            Username:
            <input
              name="userName"
              type="UserName"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              required />
          </label>
    
          <button>Submit</button>
        </form>
        </StyledRegister>
      );
    }
export default Register;