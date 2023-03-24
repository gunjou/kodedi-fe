import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdCalendar, IoMdSave } from 'react-icons/io'
import { NavLink } from "react-router-dom";

const Anamnesis = () => {
	let listKeluhan = [
		{keluhan: "Keluhan", detail : "Tidak Ada"},
		{keluhan: "Keluhan", detail : "Tidak Ada"},
		{keluhan: "Keluhan", detail : "Tidak Ada"},
		{keluhan: "Keluhan", detail : "Tidak Ada"},
	]

  return (
    <div className='Anamnesis'>
      <div id="Anamnesis" class="TableComponents tabcontent text-left mb-5 border-4 border-purple-600 rounded-xl rounded-tl-none p-3">
				<div class="Title grid grid-cols-5 bg-purple-400 text-white text-sm rounded-t-xl font-bold">
					<span class="Komponen p-1.5 pl-4 col-span-2">Komponen</span>
					<span class="Hasil p-1.5 pl-14 col-span-2">Hasil</span>
					<span class="Action p-1.5 pl-4 col-span-1"></span>
				</div>
				<div class="Row bg-purple-200 rounded-b-xl">
					{listKeluhan.map((row, i) =>
						<div class="grid grid-cols-9 p-1.5 gap-3">
							<div class="col-span-4 text-xs bg-white rounded-md pl-3 pt-2 grid grid-flow-col cursor-pointer">
								<p>{row.keluhan} {i+1}</p>
								<p class="pr-3 text-base justify-self-end"><IoMdArrowDropdown /></p>
							</div>
							<div class="col-span-4 text-xs bg-white rounded-md pl-3 pt-2 cursor-text">
								<p>{row.detail}</p>
							</div>
							<div class="col-span-1 p-1 flex gap-3 justify-center">
								<span class="rounded-full text-white text-base bg-[#50A6D5] cursor-pointer">
									<p class="p-1"><IoMdCalendar /></p>
								</span>
								<span class="rounded-full text-white text-base bg-red-500 cursor-pointer">
									<p class="p-1"><FaMinus /></p>
								</span>
							</div>
						</div>
					)}
				</div>
			<div class="pt-1 flex gap-2 ml-4">
				<span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-green-500 cursor-pointer">
					<span class="text-base"><FaPlus /></span>
				</span>
				<span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-[#50A6D5] cursor-pointer">
					<span class="text-base"><IoMdSave /></span>
				</span>
			</div>
			</div>
    </div>
  )
}

export default Anamnesis