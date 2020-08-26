
import React, { Component } from 'react';

class Register extends Component {
  state = {
    primaryemail: '',
    username: '',
    password: ''
  };

handleSubmit = event => {
    event.preventDefault();
    
    const user = {
      primaryemail: this.state.primaryemail, 
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
        <form onSubmit = { this.handleSubmit }>
          <label> Email:
            <input type = "text" name = "primaryemail" onChange= {this.handleChange}/>
          </label>

          <label> User-Name:
            <input type = "text" name = "username" onChange= {this.handleChange}/>
          </label>

          <label> Password:
            <input type = "text" name = "password" onChange= {this.handleChange}/>
          </label>
          <button type = "submit"> Add </button>
        </form>
    </div>
    );
  }
}
export default Register; 

