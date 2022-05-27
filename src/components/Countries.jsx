import React from 'react'
import Country from './Country'

const Countries = ({ data }) => {
	console.log(data)
	return (
		<section className='countries'>
			{data.map(country => {
				return (
					<Country
						key={country?.id}
						img={country?.flags?.svg}
						capital={country?.capital}
						country={country?.name?.common}
						region={country?.region}
						population={country?.population}
					/>
				)
			})}
		</section>
	)
}

export default Countries
