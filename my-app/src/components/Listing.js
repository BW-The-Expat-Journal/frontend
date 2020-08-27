import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Listing = (props) => {
	const { title, location, description } = props
	console.log('LISTING COMPONENT ', props)
	const handleDelete = () => {
		console.log('CLICKED DELETE', props.data.storyid)
		axiosWithAuth()
			.delete(`http://sj-mh-expat-journal.herokuapp.com/stories/story/${props.data.storyid}`)
			.then((res) => {
				console.log(res)
				window.location.reload(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleEdit = () => {}
	return (
		<div>
			<h1> {title} </h1>
			<p> {location}</p>
			<p>{description}</p>
			<button>Edit Story</button>
			<button onClick={() => handleDelete()}>Delete Story</button>
		</div>
	)
}

export default Listing
