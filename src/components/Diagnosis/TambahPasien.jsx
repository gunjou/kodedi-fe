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
import { BASE_URL } from '../../pages/Diagnosis';
// import { handleClose } from './ListPatient';

const TambahPasien = () => {
  const [title, setTitle] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [fixBirthDate, setFixBirthDate] = useState(null);

  const [masterTitle, setMasterTitle] = useState([]);
  const [masterJK, setMasterJK] = useState([]);
  const [masterNegara, setMasterNegara] = useState([]);

	const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
	const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
	const handleChangeNationality = (event) => {
    setNationality(event.target.value);
  };
	const handleChangeBirthDate = (event) => {
    setBirthDate(event);
    setFixBirthDate(event.$d);
  };
	// console.log(fixBirthDate)

	useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/data-title',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterTitle(response.data)
		});
	}, []);

	useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/data-jeniskelamin',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterJK(response.data)
		});
	}, []);

	useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/data-negara',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterNegara(response.data)
		});
	}, []);

	function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: BASE_URL + "/api/pasien/tambah",
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        title: title,
				fullname: fullname,
				gender: gender,
				nationality: nationality,
				birth_date: fixBirthDate,
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
				{/* Titile */}
				<div className="Title mb-6 text-xs">
					<label className="relative block">
						<span className="sr-only">Title</span>
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Title</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={title}
								label="Title"
								onChange={handleChangeTitle}
							>
								{masterTitle.map((row) =>
									<MenuItem value={row.id}>{row.nama}</MenuItem>
								)}
							</Select>
						</FormControl>
					</label>
				</div>
				{/* Nama Lengkap */}
				<div className="Fullname mb-6">
					<label className="relative block">
						<FormControl fullWidth size="small">
							<TextField 
								onChange={(e) => setFullname(e.target.value)}
								id="outlined-basic"
								label="Fullname"
								variant="outlined"
								size="small"
							/>
						</FormControl>
					</label>
				</div>
				{/* Gender */}
				<div className="Title mb-6 text-xs">
					<label className="relative block">
						{/* <span className="sr-only">Title</span> */}
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={gender}
								label="Jenis Kelamin"
								onChange={handleChangeGender}
							>
								{masterJK.map((row) =>
									<MenuItem value={row.id}>{row.jk}</MenuItem>
								)}
							</Select>
						</FormControl>
					</label>
				</div>
				{/* Nationality */}
				<div className="Title mb-6 text-xs">
					<label className="relative block">
						{/* <span className="sr-only">Title</span> */}
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={nationality}
								label="Kewarganegaraan"
								onChange={handleChangeNationality}
							>
								{masterNegara.map((row) => 
									<MenuItem value={row.id}>{row.negara}</MenuItem>
								)}
							</Select>
						</FormControl>
					</label>
				</div>
				{/* Tanggal Lahir */}
				<div className="grid bg-[#eeeff1] rounded-lg">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Tanggal Lahir"
							format="DD/MM/YYYY"
							value={birthDate}
							onChange={handleChangeBirthDate}
							renderInput={(params) => <TextField size="small" fullWidth {...params } />}
							InputAdornmentProps={{ position: 'start' }}
							/>
					</LocalizationProvider>
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

export default TambahPasien