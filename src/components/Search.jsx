import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	return (
		<section className='search'>
			<label htmlFor='search' className='search__iconContainer'>
				<FaSearch className='search__imgContainer__icon' />
			</label>
			<input
				className='search__input'
				id='search'
				type='text'
				placeholder='Search for a country...'
			/>
		</section>
	)
}

export default Search
