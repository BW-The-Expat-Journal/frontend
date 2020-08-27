import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialForm = {
	username: '',
	password: ''
}

const Login = (props) => {
	const [ form, setForm ] = useState(initialForm)
	const history = useHistory()

	const handleSubmit = (event) => {
		console.log('LOGIN FORM', form)
		event.preventDefault()
		axios
			.post(
				'https://sj-mh-expat-journal.herokuapp.com/login ',
				`grant_type=password&username=${form.username}&password=${form.password}`,
				{
					headers: {
						// btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			)
			.then((res) => {
				localStorage.setItem('token', res.data.access_token)
				console.log('LOGIN RES ', res)
				history.push('/Home')
			})
			.catch((err) => console.log(err))
	}

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<div>
			<Nav />
			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Username:
					<input type="text" name="username" onChange={(e) => handleChange(e)} value={form.username} />
				</label>

				<label>
					{' '}
					Password:
					<input type="text" name="password" onChange={(e) => handleChange(e)} value={form.password} />
				</label>
				<button type="submit"> Submit </button>
			</form>
		</div>
	)
}
export default Login
