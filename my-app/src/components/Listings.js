import React, { useEffect } from 'react'
import Listing from './Listing'
import { useSelector, useDispatch } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Listings = () => {
	const stories = useSelector((state) => state.data || [])
	const dispatch = useDispatch()

	useEffect(() => {
		axiosWithAuth()
			.get('http://sj-mh-expat-journal.herokuapp.com/stories/stories')
			.then((response) => {
				dispatch({ type: 'FETCH_DATA', payload: response.data })
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	console.log('stories ', stories)
	return (
		<div>
			{stories.map((story) => {
				return (
					<Listing
						title={story.title}
						location={story.location}
						description={story.description}
						data={story}
					/>
				)
			})}
		</div>
	)
}

export default Listings
