import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

const Listing = (props) => {
	const { title, location, description } = props

	const handleDelete = () => {
		axiosWithAuth()
			.delete(`https://sj-mh-expat-journal.herokuapp.com/stories/story/${props.data.storyid}`)
			.then((res) => {
				console.log(res)
				window.location.reload(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	// const handleEdit = () => {}
	return (
		<div>
			<h1>{title} </h1>
			<p> {location}</p>
			<p>{description}</p>
			<Link to={`/edit_story/${props.data.storyid}`}>
				<button>Edit Story</button>
			</Link>
			<button onClick={() => handleDelete()}>Delete Story</button>
		</div>
	)
}

export default Listing
