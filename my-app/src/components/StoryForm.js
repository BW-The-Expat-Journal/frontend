import React, { Component } from 'react'
import Nav from './Nav'

class StoryForm extends Component {
	state = {
		title: '',
		location: '',
		description: ''
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const story = {
			title: this.state.title,
			location: this.state.location,
			description: this.state.description
		}
		console.log(story)
	}
	handleChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		})
	}
	render() {
		return (
			<div>
				<Nav />
				<form onSubmit={this.handleSubmit}>
					<label>
						{' '}
						Title:
						<input type="text" name="title" onChange={this.handleChange} />
					</label>

					<label>
						{' '}
						location:
						<input type="text" name="location" onChange={this.handleChange} />
					</label>

					<label>
						{' '}
						Description:
						<input type="text" name="description" onChange={this.handleChange} />
					</label>
					<button type="submit"> Submit </button>
				</form>
			</div>
		)
	}
}
export default StoryForm
