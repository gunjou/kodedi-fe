import React, { useState } from 'react'
// import { FaMinus, FaPlus } from 'react-icons/fa'
// import { IoMdArrowDropdown, IoMdCalendar, IoMdSave } from 'react-icons/io'
import Anamnesis from './DetailPatient/Anamnesis'
import TandaVital from './DetailPatient/TandaVital'
import Laboratorium from './DetailPatient/Laboratorium'

// const active = {
// 	display: 'flex',
//   color: '#42a7b3',
//   padding: '8px',
//   fontWeight: 'bold',
//   width: '100%',
//   textAlign: 'left',
// }

// const nonactive = {
// 	backgroundColor: '#9C27B0',
//   padding: '8px',
// }

const DetailPatient = () => {
	const [isAnamnesis, setIsAnamnesis] = useState(true);
	const [isTandaVital, setIsTandaVital] = useState(false);
	const [isLaboratorium, setIsLaboratorium] = useState(false);

	function handleAnamnesis() {
		setIsAnamnesis(true)
		setIsTandaVital(false)
		setIsLaboratorium(false)
	  }

	function handleTandaVital() {
		setIsAnamnesis(false)
		setIsTandaVital(true)
		setIsLaboratorium(false)
	  }

	function handleLaboratorium() {
		setIsAnamnesis(false)
		setIsTandaVital(false)
		setIsLaboratorium(true)
	  }
	
  return (
    <div className='DetailPatient col-span-2'>
			<div class="tab text-white pt-1 font-bold text-left">
				<button 
					// style={({ isActive }) => (isActive ? active : nonactive)}
					class="Anamnesis tablinks bg-purple-500 hover:bg-purple-600 rounded-lg p-1.5 pl-2 pr-2"
					onClick={handleAnamnesis}>
					Anamnesis
				</button>
				<button 
					class="TandaVital tablinks bg-purple-500 hover:bg-purple-600 rounded-lg p-1.5 pl-2 pr-2 ml-3"
					// style={({ isActive }) => (isActive ? active : nonactive)}
					onClick={handleTandaVital}>
					Tanda Vital
				</button>
				<button 
					class="Laboratorium tablinks bg-purple-500 hover:bg-purple-600 rounded-lg p-1.5 pl-2 pr-2 ml-3"
					// style={({ isActive }) => (isActive ? active : nonactive)}
					onClick={handleLaboratorium}>
					Laboratorium
				</button>
			</div>
			<>
			{
			isAnamnesis
        	? <Anamnesis />
        	: isTandaVital
        	? <TandaVital />
        	: isLaboratorium
        	? <Laboratorium />
        	: <></>
      		}
			</>
		</div>
  )
}

export default DetailPatient