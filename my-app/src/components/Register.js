import React, { Component } from 'react'
import Nav from './Nav'
//import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'
import { REGISTER_PATH, BASE_URL } from '../utils/URLS'
import styled from 'styled-components';


const StyledRegister = styled.div `

input {
	border: 2px solid black;	
}
input:invalid{
	border: 2px solid red;
}
`


class Register extends Component {

	state = {
		primaryemail: '',
		username: '',
		password: ''
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const user = {
			primaryemail: this.state.primaryemail,
			username: this.state.username,
			password: this.state.password
		}
		console.log('REGISTER USER ', user)

		axios
			.post(`${BASE_URL}${REGISTER_PATH}`, user)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	handleChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		})
	}
	render() {
		return (
			<StyledRegister>
				<Nav />
				<form onSubmit={this.handleSubmit}>
					<label>
						{' '}
						Email:
						<input type="text" name="primaryemail" onChange={this.handleChange} required/>
					</label>

					<label>
						{' '}
						User-Name:
						<input type="text" name="username" onChange={this.handleChange} required />
					</label>

					<label>
						{' '}
						Password:
						<input type="text" name="password" onChange={this.handleChange}  required/>
					</label>
					<button type="submit"> Submit </button>
				</form>
			</StyledRegister>
		)
	}
}
export default Register
