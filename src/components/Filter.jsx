import React, { useState } from 'react'
import { VscChevronDown } from 'react-icons/vsc'
import { VscChevronUp } from 'react-icons/vsc'

const Filter = () => {
	const [dropDown, setDropDown] = useState(false)

	return (
		<section className='filter'>
			<button
				onClick={() => setDropDown(prev => !prev)}
				className='filter__dropdown'
			>
				<p className='filter__dropdown__heading'>Filter by region</p>
				{dropDown ? <VscChevronUp /> : <VscChevronDown />}
			</button>

			<div
				style={{ opacity: `${dropDown ? 1 : 0}` }}
				className='filter__container'
			>
				<li className='filter__container__list'>Africa</li>
				<li className='filter__container__list'>America</li>
				<li className='filter__container__list'>Asia</li>
				<li className='filter__container__list'>Europe</li>
				<li className='filter__container__list'>Oceania</li>
			</div>
		</section>
	)
}

export default Filter
