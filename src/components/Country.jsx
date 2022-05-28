import React from 'react'

const Card = ({ img, country, population, region, capital }) => {
	const numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<div className='country'>
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
		</div>
	)
}

export default Card
