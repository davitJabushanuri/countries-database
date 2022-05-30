import React from 'react'

const CountryDetails = ({
	img,
	country,
	nativeName,
	population,
	region,
	subRegion,
	capital,
	topLevelDomain,
	currencies = 'null',
	languages,
	borderCountries,
}) => {
	const languagesArr = Object.values(languages)
	const currenciesArr = Object.values(currencies)
	const nativeNameArr = Object.values(nativeName)
	console.log(nativeNameArr[0].common)
	const numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<section className='countryDetails'>
			<div className='countryDetails__imgContainer'>
				<img src={img} alt='' className='countryDetails__imgContainer__img' />
			</div>
			<div className='gridContainer'>
				<h1 className='gridContainer__countryName'>{country}</h1>
				<div className='gridContainer__basicInfo'>
					<p className='gridContainer__basicInfo__element'>
						Native Name:
						<span className='gridContainer__basicInfo__span'>
							{nativeNameArr[nativeNameArr.length - 1]?.common}
						</span>
					</p>
					<p className='gridContainer__basicInfo__element'>
						Population:
						<span className='gridContainer__basicInfo__span'>
							{numberWithCommas(population)}
						</span>
					</p>
					<p className='gridContainer__basicInfo__element'>
						Region:
						<span className='gridContainer__basicInfo__span'>{region}</span>
					</p>
					<p className='gridContainer__basicInfo__element'>
						Sub Region:
						<span className='gridContainer__basicInfo__span'>{subRegion}</span>
					</p>
					<p className='gridContainer__basicInfo__element'>
						Capital:
						<span className='gridContainer__basicInfo__span'>{capital}</span>
					</p>
				</div>

				<div className='gridContainer__advancedInfo'>
					<p className='gridContainer__advancedInfo__element'>
						Top Level Domain:
						<span className='gridContainer__advancedInfo__span'>
							{topLevelDomain}
						</span>
					</p>
					<p className='gridContainer__advancedInfo__element'>
						Currencies:
						<span className='gridContainer__advancedInfo__span'>
							{currenciesArr[0].name}
						</span>
					</p>
					<p className='gridContainer__advancedInfo__element'>
						Languages:
						<span className='gridContainer__advancedInfo__span flexLanguages'>
							{languagesArr &&
								languagesArr.map((x, i) => {
									return <span key={i}>{x}</span>
								})}
						</span>
					</p>
				</div>

				<div className='gridContainer__border'>
					<h2 className='gridContainer__border__header'>Border Countries:</h2>
					<div className='gridContainer__border__countries'>
						{borderCountries &&
							borderCountries.map((country, i) => {
								return <span key={i}>{country}</span>
							})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CountryDetails
