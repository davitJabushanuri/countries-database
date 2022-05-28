import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({
	img,
	country,
	population,
	region,
	capital,
	nativeName,
	subRegion,
	topLevelDomain,
	currencies,
	languages,
	borderCountries,
}) => {
	const numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<Link
			to='/details'
			state={{
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
			}}
			className='country'
		>
			<div className='country__imgContainer'>
				<img src={img} alt='' className='country__imgContainer__img' />
			</div>

			<h1 className='country__heading'>{country}</h1>
			<div className='country__details'>
				<p className='country__details__population'>
					Population:{' '}
					<span className='country__details__population__span'>
						{numberWithCommas(population)}
					</span>
				</p>
				<p className='country__details__population'>
					Region:{' '}
					<span className='country__details__population__span'>{region}</span>
				</p>
				<p className='country__details__population'>
					Capital:{' '}
					<span className='country__details__population__span'>{capital}</span>
				</p>
			</div>
		</Link>
	)
}

export default Card
