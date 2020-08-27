import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import StoryForm from './components/StoryForm'

const App = () => {
	return (
		<div>
			<Route exact path="/">
				<Login component={Login} />
			</Route>

			<Route path="/Home">
				<Home component={Home} />
			</Route>

			<Route path="/Register">
				<Register component={Register} />
			</Route>

			<Route path="/Post">
				<StoryForm component={StoryForm} />
			</Route>

			<Route exact path="/edit_story/:id">
				<StoryForm />
			</Route>
		</div>
	)
}

export default App
