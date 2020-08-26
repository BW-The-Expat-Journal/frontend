import React from "react"; 
import { Route } from "react-router-dom"; 
import Home from "./components/Home"; 
import Register from './components/Register'; 
import Login from './components/Login'
       
      
const App = () => {
      
         return (
           <div>
          <Route exact path="/Home">
               <Home component={Home} />
             </Route>  
      
      <Route path="/Register">
        <Register />
      </Route>

             <Route exact path="/">
               <Login component={Login}/>
             </Route>

          
            </div>
         );
       };  
      
       export default App;

