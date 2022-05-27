import React, { useState } from 'react'
import { VscChevronDown } from 'react-icons/vsc'
import { VscChevronUp } from 'react-icons/vsc'

const Filter = ({ setFilterWord, filterWord }) => {
	const [dropDown, setDropDown] = useState(false)

	return (
		<section className='filter'>
			<button
				onClick={() => setDropDown(prev => !prev)}
				className='filter__dropdown'
			>
				<p className='filter__dropdown__heading'>
					{filterWord.length === 0 ? `Filter by region` : filterWord}
				</p>
				{dropDown ? <VscChevronUp /> : <VscChevronDown />}
			</button>

			<div
				style={{ display: `${dropDown ? 'flex' : 'none'}` }}
				className='filter__container'
			>
				<li
					onClick={() => {
						setFilterWord('Africa')
						setDropDown(prev => !prev)
					}}
					className='filter__container__list'
				>
					Africa
				</li>
				<li
					onClick={() => {
						setFilterWord('Americas')
						setDropDown(prev => !prev)
					}}
					className='filter__container__list'
				>
					America
				</li>
				<li
					onClick={() => {
						setFilterWord('Asia')
						setDropDown(prev => !prev)
					}}
					className='filter__container__list'
				>
					Asia
				</li>
				<li
					onClick={() => {
						setFilterWord('Europe')
						setDropDown(prev => !prev)
					}}
					className='filter__container__list'
				>
					Europe
				</li>
				<li
					onClick={() => {
						setFilterWord('Oceania')
						setDropDown(prev => !prev)
					}}
					className='filter__container__list'
				>
					Oceania
				</li>
				<li
					onClick={() => {
						setFilterWord('All')
						setDropDown(prev => !prev)
					}}
					className='filter__container__list'
				>
					All
				</li>
			</div>
		</section>
	)
}

export default Filter
