import React, { Component } from 'react';
import Nav from './Nav'
import axios  from 'axios'


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
    axios.post('https://cors-anywhere.herokuapp.com/http://sj-mh-expat-journal.herokuapp.com/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      localStorage.setItem('token', res.data.access_token);
      console.log(res);
      // props.history.push('/');
    })
    .catch(err => console.log(err));
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
