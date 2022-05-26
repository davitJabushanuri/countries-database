import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'

const Home = ({ darkTheme, SetDarkTheme }) => {
	return (
		<section className='home'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
		</section>
	)
}

export default Home
