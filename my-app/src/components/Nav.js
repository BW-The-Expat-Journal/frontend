import React from 'react';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { Link } from "react-router-dom"; ;
   

const Nav = (props) => {
    return (
      <>
 <div>
        <Link to="/Register" orders={Register}> SignUp</Link>
        <Link to="/Login" orders={Login}> Login</Link>
        <Link to="/Home" orders={Home}>Home</Link>
 </div>
       
      </>
    );
  };
  export default Nav;  
 