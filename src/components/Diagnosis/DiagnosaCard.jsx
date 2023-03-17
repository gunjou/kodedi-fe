import React from 'react'

const DiagnosaCard = () => {
	let ListDiagnosis = [
		{name: "Fever", qty: 2, percent: 10},
		{name: "Hypertensive Heart Disease", qty: 3, percent: 15},
		{name: "Tuberculosis of Lung", qty: 5, percent: 25},
		{name: "Diagnosa Lainnya", qty: 10, percent: 50},
	]
  return (
    <div className="DiagnosaCard grid">
			<div className="title grid grid-cols-4 gap-6 bg-[#DF4B47] p-2 text-white rounded-t-xl font-bold">
						<span className="pl-3 col-span-2 text-left">Diagnosa</span>
						<span className="">Jumlah</span>
						<span className="pr-3">Persentase</span>
					</div>
					<div className="title grid grid-cols-4 gap-3 bg-[#E9736f] p-2 text-white text-sm rounded-b-xl font-bold">
					<ul className="pl-3 col-span-2 text-left">
							<li>Fever</li>
							<li>Hypertensive Heart Disease</li>
							<li>Tuberculosis of Lung</li>
							<li>Diagnosa Lainnya</li>
						</ul>
						<ul className="">
							<li>2</li>
							<li>3</li>
							<li>5</li>
							<li>10</li>
						</ul>
						<ul className="pr-3 ">
							<li>10%</li>
							<li>15%</li>
							<li>25%</li>
							<li>50%</li>
						</ul>
					</div>
    </div>
  )
}

export default DiagnosaCard