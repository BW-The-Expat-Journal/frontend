import React from 'react'
import { useState } from 'react'

const initialForm = {
	title: '',
	location: '',
	description: ''
}
const EditForm = () => {
	const [ form, setForm ] = useState(initialForm)
	return (
		<form>
			<input type="text" name="title" />
		</form>
	)
}

export default EditForm
