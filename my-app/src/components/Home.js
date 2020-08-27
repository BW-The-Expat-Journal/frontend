import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Listings from './Listings'

const StyledHome = styled.div`text-align: center;`

const Home = (props) => {
	return (
		<StyledHome>
			<Nav />
			<h1>Expat Journal</h1>
			<h2>Never Forget Another Adventure!</h2>
			<Link to="/Post" className="link">
				{' '}
				Post a story now!{' '}
			</Link>
			<Listings />
		</StyledHome>
	)
}
export default Home
