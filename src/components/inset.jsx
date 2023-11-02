import React from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import "./components.css"

const Inset = ({ children }) => {
	return (
		<div className="inset">
			<div className="white-bg">
				{ children }
			</div>
		</div>
	)
}

export default Inset