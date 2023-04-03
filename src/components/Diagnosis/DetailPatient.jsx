import React, { useState } from 'react'
import Anamnesis from './DetailPatient/Anamnesis'
import TandaVital from './DetailPatient/TandaVital'
import Laboratorium from './DetailPatient/Laboratorium'


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
					onClick={handleAnamnesis}
					style={{
						backgroundColor: isAnamnesis ? 'rgb(147 51 234)' : '',
						borderBottomLeftRadius: isAnamnesis ? '0px' : '',
						borderBottomRightRadius: isAnamnesis ? '0px' : '',
						paddingBottom: isAnamnesis ? '10px' : '',
					}}>
					Anamnesis
				</button>
				<button 
					class="TandaVital tablinks bg-purple-500 hover:bg-purple-600 rounded-lg p-1.5 pl-2 pr-2 ml-3"
					// style={({ isActive }) => (isActive ? active : nonactive)}
					onClick={handleTandaVital}
					style={{
						backgroundColor: isTandaVital ? 'rgb(147 51 234)' : '',
						borderBottomLeftRadius: isTandaVital ? '0px' : '',
						borderBottomRightRadius: isTandaVital ? '0px' : '',
						paddingBottom: isTandaVital ? '10px' : '',
					}}>
					Tanda Vital
				</button>
				<button 
					class="Laboratorium tablinks bg-purple-500 hover:bg-purple-600 rounded-lg p-1.5 pl-2 pr-2 ml-3"
					// style={({ isActive }) => (isActive ? active : nonactive)}
					onClick={handleLaboratorium}
					style={{
						backgroundColor: isLaboratorium ? 'rgb(147 51 234)' : '',
						borderBottomLeftRadius: isLaboratorium ? '0px' : '',
						borderBottomRightRadius: isLaboratorium ? '0px' : '',
						paddingBottom: isLaboratorium ? '10px' : '',
					}}>
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