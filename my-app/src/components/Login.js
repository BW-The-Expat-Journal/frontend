import React, { Component } from 'react';
import Nav from './Nav'
class Login extends Component {
  state = {
    username: '',
    password: ''
  };

handleSubmit = event => {
    event.preventDefault();
    
    const user = { 
      username:this.state.username,
      password:this.state.password
      
    }
    console.log(user);
}
handleChange = event =>{
    this.setState({ ...this.state, [event.target.name]: event.target.value
  })}
render() {
    return (
<div>
    <Nav/>
        <form onSubmit = { this.handleSubmit }>
          <label> User-Name:
            <input type = "text" name = "username" onChange= {this.handleChange}/>
          </label>

          <label> Password:
            <input type = "text" name = "password" onChange= {this.handleChange}/>
          </label>
          <button type = "submit"> Submit </button>
        </form>
    </div>
    );
  }
}
export default Login; 
