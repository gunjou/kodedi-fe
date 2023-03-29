import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Tooltip } from "@mui/material";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdWifiProtectedSetup } from "react-icons/md";
import TambahPasien from "./TambahPasien";


function GetStatus(value) {
  if (value === 1) {
    return (<span className="text-yellow-600 flex"><AiOutlineFieldTime /> </span>);
  } else if (value === 2) {
    return (<span className="text-blue-600 flex"><MdWifiProtectedSetup /></span>);
  } else if (value === 3) {
    return (<span className="text-green-500 flex"><BiCheck /></span>);
  } else {
    return (<span className="text-red-700 flex"><IoClose /></span>);
  }
}

function getTooltipLabel(value) {
  if (value === 1) {
    return ("Antri");
  } else if (value === 2) {
    return ("Proses");
  } else if (value === 3) {
    return ("Selesai");
  } else {
    return ("Batal");
  }
}

const ListPatient = () => {
	// let listPatients = [
	// 	{id: 1, noRM: "000121", nama: "Andika Gustariano", jk: "L", umur: 30 },
	// 	{id: 2, noRM: "000122", nama: "Beben Sumarto Aji", jk: "L", umur: 29 },
	// 	{id: 3, noRM: "000123", nama: "Nenden", jk: "P", umur: 29 },
	// 	{id: 4, noRM: "000124", nama: "Ahmad Dahlan", jk: "L", umur: 35 },
	// 	{id: 5, noRM: "000125", nama: "Wanto Surahman", jk: "L", umur: 70 },
	// 	{id: 6, noRM: "000126", nama: "Sheren Rentanu", jk: "P", umur: 19 },
	// 	{id: 7, noRM: "000127", nama: "Kusmayanto", jk: "L", umur: 40 },
	// 	{id: 8, noRM: "000128", nama: "Julia Ambarwati", jk: "P", umur: 35 },
	// 	{id: 9, noRM: "000129", nama: "Mamat Surahmat", jk: "L", umur: 25 },
	// 	{id: 10, noRM: "000130", nama: "Dewi Kania", jk: "P", umur: 39 },
	// 	{id: 11, noRM: "000131", nama: "Erna Fujiawati", jk: "P", umur: 40 },
	// 	{id: 12, noRM: "000132", nama: "Edi Kusmayadi", jk: "L", umur: 34 },
	// 	{id: 13, noRM: "000133", nama: "Muhammad Hadad Setiawan", jk: "L", umur: 19 },
	// 	{id: 14, noRM: "000134", nama: "Jeff Lauw", jk: "L", umur: 23 },
	// 	{id: 15, noRM: "000135", nama: "Juminten", jk: "P", umur: 25 },
	// 	{id: 16, noRM: "000136", nama: "Tina Fernandez", jk: "P", umur: 25 },
	// ]
	const [list, setList] = useState([]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	// console.log(open)

	useEffect(() => {
		axios.get(
			'http://192.168.0.109:5000/pasien/list',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setList(response.data)
		});
	}, []);

  return (
    <div className="ListPatient">
			<div className='text-left grid gap-0.5 border-4 border-purple-600 rounded-xl bg-purple-600'>
			<div className="bg-purple-600 rounded-xl">
				<div className="grid grid-cols-12 p-2 text-white font-bold">
					<span className="col-span-1 text-center">No</span>
					<span className="col-span-3 text-center">No MR</span>
					<span className="col-span-4">Nama</span>
					<span className="col-span-1 text-center">JK</span>
					<span className="col-span-2">Umur</span>
					<span className="col-span-1 text-center">Status</span>
				</div>
				<div className="p-2 bg-white rounded-xl text-black text-sm">
					{list.map((row, i) =>
						<div className="grid pb-1 grid-cols-12 text-sm hover:bg-purple-400 rounded-xl pt-1">
							<span className='col-span-1 text-center'>{i+1}</span>
							<span className='col-span-3 text-center'>{row.no_cm}</span>
							<span className='col-span-4 pl-2'>{row.fullname}</span>
							<span className='col-span-1 text-center'>{row.gender}</span>
							<span className='col-span-2 '>{row.age_y} thn {row.age_m} bln {row.age_d} hr</span>
							<span className='col-span-1 text-center text-lg pl-5'>
								<Tooltip title={getTooltipLabel(row.status)} placement="top-end">
									{GetStatus(row.status)}
							</Tooltip>
							</span>
						</div>
					)}
				</div>
			</div>
			</div>
			<div className="ButtonAction flex gap-4 m-3 font-bold">
				{/* Button tambah pasien */}
				<button className="Add p-1 pt-1.5 border bg-green-500 rounded-2xl flex text-white" onClick={handleOpen}>
					<i className="pl-2 fa-solid fa-plus p-1 text-sm"></i>
					<p className="pr-3 text-sm">Tambah</p>
				</button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<div className="TambahPasien-modal rounded-lg ml-[30%] mr-[30%] mt-10 bg-[#eeeff1] p-8">
					<div className="header text-2xl pb-2 grid">
						<Box>
							<div className="Title flex">
								<span onClick={handleClose} className="close absolute right-[32%] text-xl cursor-pointer">x</span>
								<p id="modal-modal-title" className="text-xl font-bold pb-8">Tambah Pasien</p>
							</div>
							<TambahPasien />
						</Box>
						</div>
						</div>
				</Modal>
				<div className="Remove p-1 border bg-red-500 rounded-2xl flex text-white">
					<i className="pl-2 fa-solid fa-minus p-1 text-sm"></i>
					<p className="pr-3 ">Hapus</p>
				</div>
			</div>
		</div>
  )
}

export default ListPatient