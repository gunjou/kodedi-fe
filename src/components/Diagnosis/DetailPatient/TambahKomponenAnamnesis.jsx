import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { FaMinus } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdCalendar } from 'react-icons/io';
import { format } from 'date-fns'

const TambahKomponenAnamnesis = () => {
  const [masterKomponen, setMasterKomponen] = useState([]);
  const [masterHasil, setMasterHasil] = useState([]);

  const [komponen, setKomponen] = useState("");
  const [tglPeriksa, setTglPeriksa] = useState(null);
  const [tglPeriksaFix, setTglPeriksaFix] = useState(null);
  const [hasil, setHasil] = useState("");
	

	const handleChangeKomponen = (event) => {
    setKomponen(event.target.value);
  };
	
	const handleChangeTglPeriksa = (event) => {
		setTglPeriksa(event);
    setTglPeriksaFix(event.$d);
  };
	console.log(tglPeriksaFix)

	const handleChangeHasil = (event) => {
		setHasil(event.target.value);
	};

	useEffect(() => {
		axios.get(
			'https://kodedi.id/api/master/komponen-anamnesis',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterKomponen(response.data)
		});
	}, []);

	useEffect(() => {
		axios.get(
			'https://kodedi.id/api/master/hasil-anamnesis',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterHasil(response.data)
		});
	}, []);

	function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://kodedi.id/api/pasien/anamnesis",
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        komponen: komponen,
				tgl_periksa: tglPeriksaFix,
				hasil: hasil,
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

  const data = [
	{keluhan: "Keluhan 1", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 2", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 3", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 4", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 5", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 6", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 7", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 8", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 9", date: "03/04/2023", detail: ""},
	{keluhan: "Keluhan 10", date: "03/04/2023", detail: ""},
  ]

  return (
    <div id="modal-modal-description" className="">
			<form action="sumbit" className='grid w-auto'>
			<div class="Title grid grid-cols-11 text-sm rounded-t-xl font-bold">
            <span class="Komponen p-1.5 pl-4 col-span-4">Komponen</span>
            <span class="Hasil p-1.5 pl-4 col-span-2">Tanggal periksa</span>
            <span class="Hasil p-1.5 pl-4 col-span-4">Hasil</span>
            <span class="Action p-1.5 pl-4 col-span-1"></span>
          </div>
          <div class="Row bg-gray-200 rounded-xl">
            {data.map((r, i) =>
              <div class="grid grid-cols-11 p-1.5 gap-3">
                <div class="col-span-3 text-xs bg-white rounded-md grid grid-flow-col cursor-pointer">
				<span className="sr-only">Keluhan</span>
						<FormControl fullWidth >
							<InputLabel id="demo-simple-select-label">{r.keluhan}</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={komponen}
								label="Keluhan"
								onChange={handleChangeKomponen}
							>
								{masterKomponen.map((row) =>
									<MenuItem value={row.id}>{row.komponen}</MenuItem>
								)}
							</Select>
						</FormControl>
                </div>
                <div class="col-span-3 text-xs bg-white rounded-md grid grid-flow-col cursor-text">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Tanggal periksa"
							defaultValue={format(new Date(), 'dd/mm/yyyy')}
							format="DD/MM/YYYY"
							value={tglPeriksa}
							onChange={handleChangeTglPeriksa}
							renderInput={(params) => <FormControl size="small" fullWidth {...params } />}
							InputAdornmentProps={{ position: 'start' }}
							/>
					</LocalizationProvider>
                </div>
                <div class="col-span-4 text-xs bg-white rounded-md cursor-text">
				<span className="sr-only">Hasil</span>
						<FormControl fullWidth >
							<InputLabel id="demo-simple-select-label">Hasil</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={hasil}
								label="Hasil"
								onChange={handleChangeHasil}
							>
								{masterHasil.map((row) =>
									<MenuItem value={row.id}>{row.hasil}</MenuItem>
								)}
							</Select>
						</FormControl>
                </div>
                <div class="col-span-1 p-1 pt-4 pb-4 flex gap-3 justify-center">
                  <span class="rounded-full text-white text-base bg-red-500 cursor-pointer">
                    <p class="p-1"><FaMinus /></p>
                  </span>
                </div>
              </div>
            )}
          </div>
			</form>
			{/* <form action="sumbit" className='grid w-auto'>
				// Komponen
				<div className="Keluhan mb-6 text-xs">
					<label className="relative block">
						<span className="sr-only">Keluhan</span>
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Keluhan</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={komponen}
								label="Keluhan"
								onChange={handleChangeKomponen}
							>
								{masterKomponen.map((row) =>
									<MenuItem value={row.id}>{row.komponen}</MenuItem>
								)}
							</Select>
						</FormControl>
					</label>
				</div>
				// Tanggal Periksa
				<div className="grid mb-6 bg-[#eeeff1] rounded-lg">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Tanggal Periksa"
							format="DD/MM/YYYY"
							value={tglPeriksa}
							onChange={handleChangeTglPeriksa}
							renderInput={(params) => <TextField size="small" fullWidth {...params } />}
							InputAdornmentProps={{ position: 'start' }}
							/>
					</LocalizationProvider>
				</div>
				// Hasil
				<div className="Hasil text-xs">
					<label className="relative block">
						<span className="sr-only">Hasil</span>
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Hasil</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={hasil}
								label="Hasil"
								onChange={handleChangeHasil}
							>
								{masterHasil.map((row) =>
									<MenuItem value={row.id}>{row.hasil}</MenuItem>
								)}
							</Select>
						</FormControl>
					</label>
				</div>
			</form> */}
			<div className="grid justify-center">
				<div className="submit mt-10 h-8 w-40 text-center rounded-xl text-white bg-green-600 hover:bg-green-800 ">
					<input type="submit" value="Submit" onClick={handleSubmit} />
				</div>
			</div>
		</div>
  )
}

export default TambahKomponenAnamnesis