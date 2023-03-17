import React from 'react'
import { IoMdArrowDropdown, IoMdCalendar, IoMdSave } from 'react-icons/io'

const PredictResult = () => {
	let listPredict = [
		{no: 1, diagnosa: "R50.9 - Fever", type: "Diagnosa Utama"},
		{no: 2, diagnosa: "I11.0 - Hypertensive Heart Disease", type: "Diagnosa Tambahan"},
		{no: 3, diagnosa: "A16.0 - Tuberculosis of Lung", type: "Diagnosa Tambahan"},
		{no: 4, diagnosa: "J18.9 - Pneunomia", type: "Diagnosa Tambahan"},
		{no: 5, diagnosa: "D64.9 - Anaemia", type: "Diagnosa Tambahan"},
	]

  return (
    <div className='PredictResult mt-3 mb-2 border-4 border-purple-400 bg-purple-400 rounded-xl'>
			{/* Title Components */}
				<div className='Title grid grid-cols-12 bg-purple-400 text-white text-sm font-bold rounded-t-xl'>
					<span className='No p-1.5 pl-4 col-span-1 text-left'>No</span>
					<span className='Diagnosa p-1.5 pl-4 col-span-6 text-left'>Kode - Diagnosa</span>
					<span className='Jenis p-1.5 pl-4 col-span-4 text-left'>Jenis</span>
					<span className='Action p-1.5 pl-4 col-span-1'>Aksi</span>
				</div>
				{/* Row Contents */}
				<div className='bg-white rounded-xl'>
					{listPredict.map((row) => 
						<div className='Row grid grid-cols-12 p-1 gap-3'>
							<div className='col-span-1 text-xs text-left p-1 pt-1.5'>
								<p className='pl-2.5'>{row.no}</p>
							</div>
							<div className='col-span-6 text-xs text-left bg-white rounded-md pl-3 pt-1.5'>
								<p>{row.diagnosa}</p>
							</div>
							<div className='col-span-4 p-0.5 pl-3 pt-1.5 text-xs text-left bg-purple-200 rounded-md grid grid-flow-col cursor-pointer'>
								<p>{row.type}</p>
								<span className='pr-2.5 text-base justify-self-end'><IoMdArrowDropdown /></span>
							</div>
							<div className='col-span-1 flex gap-2 justify-center'>
								<span className='rounded-full text-white text-xs bg-[#50A6D5] cursor-pointer'>
									<p className='p-1.5 text-base'><IoMdCalendar /></p>
								</span>
								<span className='rounded-full text-white text-xs bg-[#50A6D5] cursor-pointer'>
									<p className='p-1.5 text-base'><IoMdSave /></p>
								</span>
							</div>
						</div>
					)}
				</div>
		</div>
  )
}

export default PredictResult