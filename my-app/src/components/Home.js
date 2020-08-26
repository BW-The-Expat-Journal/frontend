import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'


const StyledHome = styled.div `
text-align:center;

 `;



 const Home = (props) => {
   return (
     
     <StyledHome>
      <Nav/>
        <h1>Expat Journal</h1>
        <h2>Never Forget Another Adventure!</h2>
      </StyledHome>
     
   );
 };
 export default Home;  
