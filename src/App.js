import React from 'react'
import './scss/main.scss'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='details' element={<Details />} />
			</Routes>
		</div>
	)
}

export default App
