import React from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import './style.css'

import Inset from '../../components/inset'

const TwitterClone = ({ showTwitterClone }) => {
	return (
		<Inset>
			<div className="ml-2 mt-2 bg-red-500 cursor-pointer" onClick={() => showTwitterClone(false)}>
				<AiOutlineClose />
			</div>
		</Inset>
	)
}

export default TwitterClone