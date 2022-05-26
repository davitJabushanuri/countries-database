import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Search from '../components/Search'

const Home = ({ darkTheme, SetDarkTheme }) => {
	return (
		<section className='home'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
			<Search darkTheme={darkTheme} />
		</section>
	)
}

export default Home
