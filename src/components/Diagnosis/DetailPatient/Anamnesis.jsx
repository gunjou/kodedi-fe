import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdCalendar, IoMdSave } from 'react-icons/io';
import { BASE_URL } from '../../../pages/Diagnosis';

import TambahKomponenAnamnesis from './TambahKomponenAnamnesis';

const Anamnesis = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [data, setData] = useState([]);
	const [detailPatient, setDetailPatient] = useState();

	useEffect(() => {
		axios({
		  method: "POST",
		  url: BASE_URL + '/api/pasien/get-anamnesis',
		  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		  data: {
			patient: localStorage.getItem("patient"),
		  },
		}).then((response) => {
			setData(response.data)
		});
	}, []);
  // console.log(data)
  // console.log(data.length)

	useEffect(() => {
		axios({
		  method: "GET",
		  url: BASE_URL + '/api/pasien/get-detail-patient',
		  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		}).then((response) => {
			setDetailPatient(response.data)
		});
	}, []);


	if(data.length !== 0) {
    return (
      <div className='Anamnesis'>
        <div id="Anamnesis" class="TableComponents tabcontent text-left mb-5 border-4 border-purple-600 rounded-xl rounded-tl-none p-3">
          <div class="Title grid grid-cols-11 bg-purple-400 text-white text-sm rounded-t-xl font-bold">
            <span class="Komponen p-1.5 pl-4 col-span-4">Komponen</span>
            <span class="Hasil p-1.5 pl-4 col-span-2">Tanggal periksa</span>
            <span class="Hasil p-1.5 pl-4 col-span-4">Hasil</span>
            <span class="Action p-1.5 pl-4 col-span-1"></span>
          </div>
          <div class="Row bg-purple-200 rounded-b-xl">
            {data.map((row, i) =>
              <div class="grid grid-cols-11 p-1.5 gap-3">
                <div class="col-span-4 text-xs bg-white rounded-md pl-3 pt-2 grid grid-flow-col cursor-pointer">
                  <p>{row.keluhan}</p>
                  <p class="pr-3 text-base justify-self-end"><IoMdArrowDropdown /></p>
                </div>
                <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-2 grid grid-flow-col cursor-text">
                  <p>{row.date}</p>
                  <p class="pr-3 text-base justify-self-end"><IoMdCalendar /></p>
                </div>
                <div class="col-span-4 text-xs bg-white rounded-md pl-3 pt-2 cursor-text">
                  <p>{row.detail}</p>
                </div>
                <div class="col-span-1 p-1 flex gap-3 justify-center">
                  <span class="rounded-full text-white text-base bg-red-500 cursor-pointer">
                    <p class="p-1"><FaMinus /></p>
                  </span>
                </div>
              </div>
            )}
          </div>
        <div class="pt-1 flex gap-2 ml-4">
          <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-green-500 cursor-pointer" onClick={handleOpen}>
            <span class="text-base"><FaPlus /></span>
          </span>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="TambahPasien-modal rounded-lg ml-[20%] mr-[20%] mt-10 bg-[#eeeff1] p-8">
            <div className="header text-2xl pb-2 grid">
              <Box>
                <div className="Title flex">
                  <p id="modal-modal-title" className="text-xl font-bold pb-2">Tambah Komponen Anamnesis</p>
                  <span onClick={handleClose} className="close absolute right-[23%] text-xl font-bold cursor-pointer">x</span>
                </div>
                <div className="grid grid-cols-3">
                  <div id="modal-modal-description" className="col-span-2 pb-1">
                    <div className="p-1 pl-2 grid grid-cols-5 rounded-xl text-sm font-bold bg-gray-300">
                      <span className='col-span-1 text-center'>No MR&emsp;&emsp;&emsp;</span>
                      <span className='col-span-2 '>Nama&emsp;</span>
                      <span className='col-span-1 text-center'>JK&emsp;</span>
                      <span className='col-span-1 '>Umur&emsp;</span>
                    </div>
                    <div className="p-2 grid grid-cols-5 rounded-xl text-sm">
                      <span className='col-span-1 text-center'>000000000000001&emsp;</span>
                      <span className='col-span-2 '>Firdaus Agus Wibowo&emsp;</span>
                      <span className='col-span-1 text-center'>L&emsp;</span>
                      <span className='col-span-1 '>34thn 0 bln 12 hr&emsp;</span>
                    </div>
                  </div>
                </div>
                <div className='flex pb-2'>
                  <div class="p-2 m-2 rounded-full text-xs text-center text-white bg-green-500 cursor-pointer w-[32px]" onClick={handleOpen}>
                    <span class="text-base "><FaPlus /></span>
                  </div>
                  <p className='text-xs pt-4 font-bold'>Tambah Komponen</p>
                </div>
                <TambahKomponenAnamnesis />
              </Box>
              </div>
              </div>
          </Modal>
          <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-[#50A6D5] cursor-pointer">
            <span class="text-base"><IoMdSave /></span>
          </span>
        </div>
      </div>
      </div>
    )
  } else {
    return (
      <div className='Anamnesis'>
        <div id="Anamnesis" class="TableComponents tabcontent text-left mb-5 border-4 border-purple-600 rounded-xl rounded-tl-none p-3">
          <p className='text-center'>Tidak ada data</p>
        <div class="pt-1 flex gap-2 ml-4">
          <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-green-500 cursor-pointer" onClick={handleOpen}>
            <span class="text-base"><FaPlus /></span>
          </span>
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
                  <p id="modal-modal-title" className="text-xl font-bold pb-8">Tambah Komponen Anamnesis</p>
                </div>
                <TambahKomponenAnamnesis />
              </Box>
              </div>
              </div>
          </Modal>
        </div>
      </div>
      </div>
    )
  }
}

export default Anamnesis