import React from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'

const Details = ({ darkTheme, SetDarkTheme }) => {
	const location = useLocation()
	const { country, data } = location.state
	console.log(location)

	return (
		<section className='details'>
			<Header darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
			<BackButton />
			<CountryDetails
				img={country?.flags?.svg}
				countryName={country?.name?.common}
				nativeName={country?.name?.nativeName}
				population={country?.population}
				region={country?.region}
				subRegion={country?.subregion}
				capital={country?.capital}
				topLevelDomain={country?.tld}
				currencies={country?.currencies}
				languages={country?.languages}
				borderCountries={country?.borders}
				data={data}
			/>
		</section>
	)
}

export default Details
