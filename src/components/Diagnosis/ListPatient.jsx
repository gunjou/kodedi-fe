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
import { BASE_URL } from '../../pages/Diagnosis';


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
	const [list, setList] = useState([]);
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [isActive, setIsActive] = useState(localStorage.getItem("patient"));
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleOpen2 = () => setOpen2(true);
	const handleClose2 = () => setOpen2(false);
	// console.log(open)

	const handleActive = (event) => {
		setIsActive(event.currentTarget.id)
		localStorage.setItem("patient", event.currentTarget.id);
		window.location.reload(false);
	}
	// console.log(isActive)

	function handleDelete(event) {
		event.preventDefault();
		axios({
			method: "POST",
			url: BASE_URL + "/api/pasien/hapus",
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			data: {
			patient: localStorage.getItem("patient")
			},
		}).then((response) => {
			localStorage.setItem("patient", null);
			window.location.reload(false);
			})
			.catch((error) => {
			if (error.response) {
				console.log(error.response);
				console.log(error.response.status);
				console.log(error.response.headers);
			}
		});
	}

	useEffect(() => {
		axios.get(
			BASE_URL + '/api/pasien/list',
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
					<span className="col-span-3 ">No MR</span>
					<span className="col-span-3 ">Nama</span>
					<span className="col-span-1 text-center">JK</span>
					<span className="col-span-3">Umur</span>
					<span className="col-span-1 text-center">Status</span>
				</div>
				<div className="p-2 bg-white rounded-xl text-black text-sm">
					{list.map((row, i) =>
						<div 
							id={row.no_cm} 
							className="grid pb-1 grid-cols-12 text-sm hover:bg-purple-300 rounded-xl pt-1" 
							style={{
								backgroundColor: row.no_cm === isActive ? 'rgb(168 85 247)' : '',
								color: row.no_cm === isActive ? '#FFFFFF' : '',
							}} 
							onClick={handleActive}>
							<span className='col-span-1 text-center'>{i+1}</span>
							<span className='col-span-3 '>{row.no_cm}</span>
							<span className='col-span-3 '>{row.fullname}</span>
							<span className='col-span-1 text-center'>{row.gender}</span>
							<span className='col-span-3 '>{row.age_y} thn {row.age_m} bln {row.age_d} hr</span>
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
				<div className="Remove p-1 border bg-red-500 rounded-2xl flex text-white" onClick={handleOpen2}>
					<i className="pl-2 fa-solid fa-minus p-1 text-sm"></i>
					<p className="pr-3 ">Hapus</p>
				</div>
				<Modal
					open={open2}
					onClose={handleClose2}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<div className="Konfirmasi-modal rounded-lg ml-[30%] mr-[30%] mt-10 bg-[#eeeff1] p-8">
					<div className="header text-2xl pb-2 grid">
						<Box>
							<div className="Title flex">
								<span onClick={handleClose2} className="close absolute right-[32%] text-xl cursor-pointer">x</span>
								<p id="modal-modal-title" className="text-xl font-bold pb-5">Hapus Pasien</p>
							</div>
							<div className="text-sm">
								<p>Apa anda yakin akan menghapus pasien dengan No CM {localStorage.getItem("patient")}?</p>
							</div>
							<div className="Button flex gap-4 pt-5">
								<button className="Hapus text-base p-0.5 pl-2.5 pr-2.5 border bg-green-500 rounded-2xl flex text-white" onClick={handleDelete}>
									<i className="fa-solid fa-plus text-sm"></i>
									<p className="">Hapus</p>
								</button>
								<button className="Batal text-base p-0.5 pl-3 pr-3 border bg-red-500 rounded-2xl flex text-white" onClick={handleClose2}>
									<i className="fa-solid fa-minus text-sm"></i>
									<p className="">Batal</p>
								</button>
							</div>
						</Box>
						</div>
						</div>
				</Modal>
			</div>
		</div>
  )
}

export default ListPatient