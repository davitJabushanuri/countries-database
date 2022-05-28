import React from 'react'
import { Link } from 'react-router-dom'
import { VscArrowLeft } from 'react-icons/vsc'

const BackButton = () => {
	return (
		<div className='backButton'>
			<Link className='backButton__link' to='/'>
				<VscArrowLeft className='backButton__link__icon' />
				<p className='backButton__link__text'>Back</p>
			</Link>
		</div>
	)
}

export default BackButton
