import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Countries from '../components/Countries'
import Loading from '../components/Loading'

const Home = ({
	darkTheme,
	SetDarkTheme,
	data,
	loading,
	setFilterWord,
	filterWord,
}) => {
	return (
		<section className='home'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
			<section className='home__searchFilter'>
				<Search />
				<Filter setFilterWord={setFilterWord} />
			</section>

			{loading ? (
				<Loading />
			) : (
				<Countries data={data} filterWord={filterWord} />
			)}
		</section>
	)
}

export default Home
