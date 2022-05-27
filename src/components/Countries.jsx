import React from 'react'
import Country from './Country'

const Countries = ({ data, filterWord }) => {
	console.log(filterWord)
	return (
		<section className='countries'>
			{filterWord.length === 0
				? data.map(country => {
						return (
							<Country
								key={country?.latlng}
								img={country?.flags?.svg}
								capital={country?.capital}
								country={country?.name?.common}
								region={country?.region}
								population={country?.population}
							/>
						)
				  })
				: filterWord === 'All'
				? data.map(country => {
						return (
							<Country
								key={country?.latlng}
								img={country?.flags?.svg}
								capital={country?.capital}
								country={country?.name?.common}
								region={country?.region}
								population={country?.population}
							/>
						)
				  })
				: data
						.filter(country => country.region === filterWord)
						.map(country => {
							return (
								<Country
									key={country?.latlng}
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
