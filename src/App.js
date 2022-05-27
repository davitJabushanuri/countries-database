import React, { useState, useEffect } from 'react'
import './scss/main.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
	const [darkTheme, SetDarkTheme] = useState(false)
	const [data, setData] = useState([])

	const getData = async url => {
		const data = await fetch(url)
		const result = await data.json()
		setData(result)
	}

	useEffect(() => {
		getData('https://restcountries.com/v3.1/all')
	}, [])

	return (
		<main id={darkTheme ? 'dark' : 'light'}>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								darkTheme={darkTheme}
								SetDarkTheme={SetDarkTheme}
								data={data}
							/>
						}
					/>
					<Route path='details' element={<Details />} />
				</Routes>
			</div>
		</main>
	)
}

export default App
