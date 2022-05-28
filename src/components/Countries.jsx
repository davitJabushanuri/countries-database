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
									country={country?.name?.common}
									region={country?.region}
									population={country?.population}
									nativeName={country?.name.nativeName}
									subRegion={country?.subregion}
									topLevelDomain={country?.tld}
									currencies={country?.currencies}
									languages={country?.languages}
									borderCountries={country?.borders}
									// nativeName,
									// subRegion,
									// topLevelDomain,
									// currencies,
									// languages,
									// borderCountries,
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
								country={country?.name?.common}
								region={country?.region}
								population={country?.population}
								nativeName={country?.name.nativeName}
								subRegion={country?.subregion}
								topLevelDomain={country?.tld}
								currencies={country?.currencies}
								languages={country?.languages}
								borderCountries={country?.altSpellings}
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
									nativeName={country?.name.nativeName}
									subRegion={country?.subregion}
									topLevelDomain={country?.tld}
									currencies={country?.currencies}
									languages={country?.languages}
									borderCountries={country?.altSpellings}
								/>
							)
						})}
		</section>
	)
}

export default Countries
