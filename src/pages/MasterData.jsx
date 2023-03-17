import React from 'react'
import MasterNegara from '../components/master/MasterNegara'

const MasterData = () => {
  return (
    <div className='MasterData grid m-4 border border-slate-700 border-t-4 border-t-[#50A6D5] text-left text-sm'>
			<div className="Title border-b border-slate-700 p-2">
				<p className='font-bold '>Master Data</p>
			</div>
			<div className="pt-2 pb-2 text-xs">
				<div className="Tab pl-2 pr-2">
					<button class="Anamnesis tablinks border-x border-slate-700 border-t-2 border-t-[#50A6D5]  rounded-t-lg p-1.5 pl-2 pr-2">
						Master Negara
					</button>
				</div>
				<div className='pl-2 pr-2'>
					<MasterNegara />
				</div>
			</div>
		</div>
  )
}

export default MasterData