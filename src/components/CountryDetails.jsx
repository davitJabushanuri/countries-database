import React from 'react'
import { useNavigate } from 'react-router-dom'

const CountryDetails = ({
	img,
	countryName,
	nativeName,
	population,
	region,
	subRegion,
	capital,
	topLevelDomain,
	currencies = 'null',
	languages,
	borderCountries,
	data,
}) => {
	const navigate = useNavigate()
	const languagesArr = Object.values(languages)
	const currenciesArr = Object.values(currencies)
	const nativeNameArr = Object.values(nativeName)

	const bordersArr = []

	if (borderCountries)
		for (let i = 0; i < borderCountries.length; i++) {
			const country = data.find(x => x.cca3 === borderCountries[i])
			bordersArr.push(country.name.common)
		}

	const numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	const redirectToBorderCountry = e => {
		const name = e.target.textContent
		const borderCountry = data.find(country => country.name.common === name)

		navigate('/details', { state: { country: borderCountry, data: data } })
	}

	return (
		<section className='countryDetails'>
			<div className='countryDetails__imgContainer'>
				<img src={img} alt='' className='countryDetails__imgContainer__img' />
			</div>
			<div className='countryDetails__gridContainer'>
				<h1 className='countryDetails__gridContainer__countryName'>
					{countryName}
				</h1>
				<div className='countryDetails__gridContainer__info'>
					<div className='countryDetails__gridContainer__info__basicInfo'>
						<p className='countryDetails__gridContainer__info__basicInfo__element'>
							Native Name:
							<span className='countryDetails__gridContainer__info__basicInfo__span'>
								{nativeNameArr[nativeNameArr.length - 1]?.common}
							</span>
						</p>
						<p className='countryDetails__gridContainer__info__basicInfo__element'>
							Population:
							<span className='countryDetails__gridContainer__info__basicInfo__span'>
								{numberWithCommas(population)}
							</span>
						</p>
						<p className='countryDetails__gridContainer__info__basicInfo__element'>
							Region:
							<span className='countryDetails__gridContainer__info__basicInfo__span'>
								{region}
							</span>
						</p>
						<p className='countryDetails__gridContainer__info__basicInfo__element'>
							Sub Region:
							<span className='countryDetails__gridContainer__info__basicInfo__span'>
								{subRegion}
							</span>
						</p>
						<p className='countryDetails__gridContainer__info__basicInfo__element'>
							Capital:
							<span className='countryDetails__gridContainer__info__basicInfo__span'>
								{capital}
							</span>
						</p>
					</div>

					<div className='countryDetails__gridContainer__info__advancedInfo'>
						<p className='countryDetails__gridContainer__info__advancedInfo__element'>
							Top Level Domain:
							<span className='countryDetails__gridContainer__info__advancedInfo__span'>
								{topLevelDomain}
							</span>
						</p>
						<p className='countryDetails__gridContainer__info__advancedInfo__element'>
							Currencies:
							<span className='countryDetails__gridContainer__info__advancedInfo__span'>
								{currenciesArr[0].name}
							</span>
						</p>
						<p className='countryDetails__gridContainer__info__advancedInfo__element'>
							Languages:
							<span className='countryDetails__gridContainer__info__advancedInfo__span flexLanguages'>
								{languagesArr &&
									languagesArr.map((x, i) => {
										return <span key={i}>{x}</span>
									})}
							</span>
						</p>
					</div>
				</div>

				<div className='countryDetails__gridContainer__border'>
					<h2 className='countryDetails__gridContainer__border__header'>
						Border Countries:
					</h2>
					<div className='countryDetails__gridContainer__border__countries'>
						{borderCountries
							? bordersArr.map((country, i) => {
									return (
										<button
											className='countryDetails__gridContainer__border__countries__borderCountry'
											onClick={e => {
												redirectToBorderCountry(e)
											}}
											key={i}
										>
											{country}
										</button>
									)
							  })
							: 'None'}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CountryDetails
