import React from 'react'

const ListPatient = () => {
	let listPatients = [
		{id: 1, noRM: "000121", nama: "Andika Gustariano", jk: "L", umur: 30 },
		{id: 2, noRM: "000122", nama: "Beben Sumarto Aji", jk: "L", umur: 29 },
		{id: 3, noRM: "000123", nama: "Nenden", jk: "P", umur: 29 },
		{id: 4, noRM: "000124", nama: "Ahmad Dahlan", jk: "L", umur: 35 },
		{id: 5, noRM: "000125", nama: "Wanto Surahman", jk: "L", umur: 70 },
		{id: 6, noRM: "000126", nama: "Sheren Rentanu", jk: "P", umur: 19 },
		{id: 7, noRM: "000127", nama: "Kusmayanto", jk: "L", umur: 40 },
		{id: 8, noRM: "000128", nama: "Julia Ambarwati", jk: "P", umur: 35 },
		{id: 9, noRM: "000129", nama: "Mamat Surahmat", jk: "L", umur: 25 },
		{id: 10, noRM: "000130", nama: "Dewi Kania", jk: "P", umur: 39 },
		{id: 11, noRM: "000131", nama: "Erna Fujiawati", jk: "P", umur: 40 },
		{id: 12, noRM: "000132", nama: "Edi Kusmayadi", jk: "L", umur: 34 },
		{id: 13, noRM: "000133", nama: "Muhammad Hadad Setiawan", jk: "L", umur: 19 },
		{id: 14, noRM: "000134", nama: "Jeff Lauw", jk: "L", umur: 23 },
		{id: 15, noRM: "000135", nama: "Juminten", jk: "P", umur: 25 },
		{id: 16, noRM: "000136", nama: "Tina Fernandez", jk: "P", umur: 25 },
	]

  return (
    <div className="ListPatient">
			<div className='text-left grid gap-1 border-4 border-purple-600 rounded-xl bg-purple-600'>
			<div class="bg-purple-600 rounded-xl">
				<div class="grid grid-cols-10 p-2 text-white font-bold">
					<span class="col-span-1 text-center">No</span>
					<span class="col-span-2 text-center">No MR</span>
					<span class="col-span-4">Nama</span>
					<span class="col-span-1 text-center">JK</span>
					<span class="col-span-1 text-center">Umur</span>
					<span class="col-span-1 text-center">Status</span>
				</div>
				<div class="p-2 bg-white rounded-xl text-black text-sm">
					{listPatients.map((row) =>
						<div class="grid pb-1 grid-cols-10 text-sm hover:bg-purple-400 rounded-xl pt-1">
							<span className='col-span-1 text-center'>{row.id}</span>
							<span className='col-span-2 text-center'>{row.noRM}</span>
							<span className='col-span-4'>{row.nama}</span>
							<span className='col-span-1 text-center'>{row.jk}</span>
							<span className='col-span-1 text-center'>{row.umur}</span>
							<span className='col-span-1 text-center'><i class="fa-solid fa-check"></i></span>
						</div>
					)}
				</div>
			</div>
			</div>
			<div class="ButtonAction flex gap-4 m-3 font-bold">
				<div class="Add p-1 border bg-green-500 rounded-2xl flex text-white">
					<i class="pl-2 fa-solid fa-plus p-1 text-sm"></i>
					<p class="pr-3 text-sm">Tambah</p>
				</div>
				<div class="Remove p-1 border bg-red-500 rounded-2xl flex text-white">
					<i class="pl-2 fa-solid fa-minus p-1 text-sm"></i>
					<p class="pr-3 text-sm">Hapus</p>
				</div>
			</div>
		</div>
  )
}

export default ListPatient