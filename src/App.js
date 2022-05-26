import React, { useState } from 'react'
import './scss/main.scss'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
	const [darkTheme, SetDarkTheme] = useState(false)
	return (
		<main id={darkTheme ? 'dark' : 'light'}>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={<Home darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />}
					/>
					<Route path='details' element={<Details />} />
				</Routes>
			</div>
		</main>
	)
}

export default App
