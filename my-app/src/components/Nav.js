import React from "react"; 
 import { Link } from "react-router-dom"; 
 import Register from './Register'
 import Login from './Login'
 import Home from './Home'
 import styled from 'styled-components'


 const StyledNav = styled.div `
 display:flex;
 justify-content:space-around;
 padding:3%;
 background:darkslategray;
 color:black;
 text-shadow:none;
 margin:2%;

 
 `;
 
 const Nav = (props) => {
   return (
     <>
<StyledNav>
       <Link to="/Register" orders={Register}> SignUp</Link>
       <Link to="/Login" orders={Login}> Login</Link>
       <Link to="/Home" orders={Home}>Home</Link>
</StyledNav>
      
     </>
   );
 };
 export default Nav