import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { FaRegMoon } from 'react-icons/fa'

const Header = ({ darkTheme, SetDarkTheme }) => {
	return (
		<section className='header'>
			<h1 className='header__heading'>Where in the world?</h1>
			<button
				onClick={() => SetDarkTheme(prev => !prev)}
				className='header__themeSwitcher'
			>
				<div className='header__themeSwitcher__iconContainer'>
					{darkTheme ? (
						<FaMoon className='header__themeSwitcher__iconContainer__icon' />
					) : (
						<FaRegMoon className='header__themeSwitcher__iconContainer__icon' />
					)}
				</div>
				<div className='header__themeSwitcher__text'>Dark Mode</div>
			</button>
		</section>
	)
}

export default Header
