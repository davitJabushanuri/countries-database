import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Countries from '../components/Countries'

const Home = ({ darkTheme, SetDarkTheme }) => {
	return (
		<section className='home'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
			<Search />
			<Filter />
			<Countries />
		</section>
	)
}

export default Home
