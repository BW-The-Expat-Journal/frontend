import React from "react"; 
       import { Route } from "react-router-dom"; 
       import Home from "./components/Home"; 
       import Register from './components/Register'; 
       import Login from './components/Login'
       
      
       const App = () => {
      
         return (
            
      <>
             <Route exact path="/Home">
               <Home component={Home} />
             </Route>  
      
             <Route path="/Register">
               <Register component={Register} />
             </Route>

             <Route path="/Login">
               <Login component={Login}/>
             </Route>
        </>
           
         );
       };  
      
       export default App;
