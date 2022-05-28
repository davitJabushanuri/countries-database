import React from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'

const Details = ({ darkTheme, SetDarkTheme }) => {
	const location = useLocation()
	const {
		img,
		country,
		nativeName,
		population,
		region,
		subRegion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borderCountries,
	} = location.state
	return (
		<section className='details'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
			<BackButton />
			<CountryDetails
				img={img}
				country={country}
				nativeName={nativeName}
				population={population}
				region={region}
				subRegion={subRegion}
				capital={capital}
				topLevelDomain={topLevelDomain}
				currencies={currencies}
				languages={languages}
				borderCountries={borderCountries}
			/>
		</section>
	)
}

export default Details
