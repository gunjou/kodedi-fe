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
			'http://192.168.0.109:5000/master/komponen-anamnesis',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterKomponen(response.data)
		});
	}, []);

	useEffect(() => {
		axios.get(
			'http://192.168.0.109:5000/master/hasil-anamnesis',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterHasil(response.data)
		});
	}, []);

	function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://192.168.0.109:5000/pasien/anamnesis",
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

  return (
    <div id="modal-modal-description" className="">
			<form action="sumbit" className='grid w-auto'>
				{/* Komponen */}
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
				{/* Tanggal Periksa */}
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
				{/* Hasil */}
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
			</form>
			<div className="grid justify-center">
				<div className="submit mt-10 h-8 w-40 text-center rounded-xl text-white bg-green-600 hover:bg-green-800 ">
					<input type="submit" value="Submit" onClick={handleSubmit} />
				</div>
			</div>
		</div>
  )
}

export default TambahKomponenAnamnesis