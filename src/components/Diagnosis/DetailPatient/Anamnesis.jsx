import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import { format } from 'date-fns';
import id from 'date-fns/locale/id';
import 'dayjs/locale/id';
import React, { useEffect, useState } from "react";
import { registerLocale } from "react-datepicker";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdCalendar, IoMdSave } from 'react-icons/io';
import { BASE_URL } from '../../../pages/Diagnosis';

registerLocale('id', id)


const columns: GridColDef[] = [
  { field: 'komponen', headerName: 'Daftar Keluhan', width: 150 },
];


const Anamnesis = () => {
	const [add, setAdd] = useState(false);
	const [data, setData] = useState([]);
  const [tglPeriksa, setTglPeriksa] = useState(null);
  const [tglPeriksaFix, setTglPeriksaFix] = useState(null);

	const [detailPatient, setDetailPatient] = useState();

  const [masterKomponen, setMasterKomponen] = useState([]);
  const [selected, setSelected] = useState([])

  console.log(tglPeriksa)
  console.log(tglPeriksaFix)
  
	const handleAdd = () => {
    setAdd(true);
  }

	const handleChangeTglPeriksa = (event) => {
		setTglPeriksa(event);
    setTglPeriksaFix(event.$d);
  };

  useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/komponen-anamnesis',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterKomponen(response.data)
		});
	}, []);

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

	// useEffect(() => {
	// 	axios({
	// 	  method: "GET",
	// 	  url: BASE_URL + '/api/pasien/get-detail-patient',
	// 	  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
	// 	}).then((response) => {
	// 		setDetailPatient(response.data)
	// 	});
	// }, []);

  function handleSave(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: BASE_URL + "/api/pasien/anamnesis",
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        patient: localStorage.getItem("patient"),
        keluhan: selected,
				tgl_periksa: tglPeriksaFix,
      },
    })
      .then((response) => {
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
  } else if(add === true) {
    return (
      <div className='Anamnesis'>
          <div id="Anamnesis" class="TableComponents tabcontent text-left mb-5 border-4 border-purple-600 rounded-xl rounded-tl-none p-3">
            <p className='pl-4 font-bold'>Pilih Keluhan Pasien</p>
              {/* <div className="col-span-2 pb-1">
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
              </div> */}
          <div class="pt-1 flex gap-2 ml-4">
            <Box sx={{ height: 300, width: '60%' }}>
              <DataGrid
                rows={masterKomponen}
                columns={columns}
                rowHeight={35}
                checkboxSelection
                pageSizeOptions={[]}
                onRowSelectionModelChange={(e) => {
                  setSelected(e);
                }}
                />
            </Box>
            <div class="pl-6 text-xs bg-white rounded-md grid grid-flow-col cursor-text">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  locale="id"
                  label="Tanggal periksa"
                  defaultValue={format(new Date(), 'dd/mm/yyyy')}
                  format="DD/MM/YYYY"
                  value={tglPeriksa}
                  onChange={handleChangeTglPeriksa}
                  renderInput={(params) => <TextField size="small" fullWidth {...params } />}
                  InputAdornmentProps={{ position: 'start' }}
                  />
              </LocalizationProvider>
            </div>
          </div>
          <div class="pt-2 flex gap-2 ml-4">
            <button className="Add p-1 pt-1.5 border bg-green-500 rounded-2xl flex text-white" onClick={(e) => handleSave(e)}>
              <p className="pl-3 pr-3 text-sm">Simpan</p>
            </button>
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
          <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-green-500 cursor-pointer" onClick={handleAdd}>
            <span class="text-base"><FaPlus /></span>
          </span>
        </div>
      </div>
    </div>
    )
  }
  
}

export default Anamnesis