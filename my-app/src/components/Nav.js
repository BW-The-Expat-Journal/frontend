import React from "react"; 
import { Link } from "react-router-dom"; 
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
       <Link to="/register" className='link'> SignUp</Link>
       <Link to="/login" className='link'> Login</Link>
       <Link to="/" className='link'>Home</Link>
</StyledNav>
      
     </>
   );
 };
 export default Nav