import React from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton'

const Details = () => {
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
			<BackButton />
		</section>
	)
}

export default Details
