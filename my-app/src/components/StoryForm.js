import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const initialForm = {
	title: '',
	location: '',
	description: ''
}

const StoryForm = () => {
	const params = useParams()
	const [ form, setForm ] = useState(initialForm)
	const history = useHistory()
	useEffect(() => {
		axiosWithAuth()
			.get(`http://sj-mh-expat-journal.herokuapp.com/stories/story/${params.id}`)
			.then((res) => {
				console.log('EDIT RES', res)
				setForm({
					title: res.data.title,
					location: res.data.location,
					description: res.data.description
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	const handleSubmit = (event) => {
		event.preventDefault()

		axiosWithAuth()
			.post('http://sj-mh-expat-journal.herokuapp.com/stories/story/', form)
			.then((res) => {
				console.log('NEW STORY ', res)
				// dispatch({ type: 'POST_STORY', payload: res.data })
				history.push('/Home')
			})
			.catch((err) => {
				console.log(err)
			})
	}
	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}
	return (
		<div>
			<Nav />
			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Title:
					<input type="text" name="title" onChange={(e) => handleChange(e)} value={form.title} />
				</label>

				<label>
					{' '}
					location:
					<input type="text" name="location" onChange={(e) => handleChange(e)} value={form.location} />
				</label>

				<label>
					{' '}
					Description:
					<input type="text" name="description" onChange={(e) => handleChange(e)} value={form.description} />
				</label>
				<button type="submit"> Submit </button>
			</form>
		</div>
	)
}
export default StoryForm
