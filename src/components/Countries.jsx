import React from 'react'
import Country from './Country'

const Countries = ({ data, filterWord, input }) => {
	return (
		<section className='countries'>
			{input.length > 0
				? data
						.filter(country =>
							filterWord.length === 0 || filterWord === 'All'
								? country.name.common
										.toLowerCase()
										.includes(input.toLowerCase())
								: country.name.common
										.toLowerCase()
										.includes(input.toLowerCase()) &&
								  country.region === filterWord
						)
						.map(country => {
							return (
								<Country
									key={country?.latlng}
									img={country?.flags?.svg}
									capital={country?.capital}
									countryName={country?.name?.common}
									region={country?.region}
									population={country?.population}
									country={country}
									data={data}
								/>
							)
						})
				: filterWord.length === 0 || filterWord === 'All'
				? data.map(country => {
						return (
							<Country
								key={country?.latlng}
								img={country?.flags?.svg}
								capital={country?.capital}
								countryName={country?.name?.common}
								region={country?.region}
								population={country?.population}
								country={country}
								data={data}
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
									countryName={country?.name?.common}
									region={country?.region}
									population={country?.population}
									country={country}
									data={data}
								/>
							)
						})}
		</section>
	)
}

export default Countries
