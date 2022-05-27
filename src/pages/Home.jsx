import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Search from '../components/Search'
import Filter from '../components/Filter'

const Home = ({ darkTheme, SetDarkTheme }) => {
	return (
		<section className='home'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
			<Search />
			<Filter />
		</section>
	)
}

export default Home
