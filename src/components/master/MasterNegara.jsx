import React from 'react'

const MasterNegara = () => {
  return (
    <div className='MasterNegara p-3'>
			<div className="grid grid-cols-2 gap-5">
        <div>
          <form className='grid'>
            <label for='negara'>Nama<span className='text-red-500'>*</span></label>
            <input type="text" className='p-0.5 border border-slate-700  w-[50%]' />
            <span className='text-left'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='justify-items-start' />
            </span>
            <label for="vehicle1"> I have a bike</label>
          </form>
        </div>
      </div>
		</div>
  )
}

export default MasterNegara