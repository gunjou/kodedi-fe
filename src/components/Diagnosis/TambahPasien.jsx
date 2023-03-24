import { Modal, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

const TambahPasien = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [fixBirthDate, setFixBirthDate] = useState(null);

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

	function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://192.168.0.109:5000/pasien/tambah",
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
		<button className="Add p-1 border bg-green-500 rounded-2xl flex text-white" onClick={handleOpen}>
					<i className="pl-2 fa-solid fa-plus p-1 text-sm"></i>
					<p className="pr-3 text-sm">Tambah</p>
			<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
				<div className="TambahPasien-modal rounded-lg ml-[40%] mr-[45%] mt-10 bg-[#eeeff1] p-5">
					<div className="header text-2xl pb-2 flex">
						<Box >
							<span id="modal-modal-title" className="text-xl font-bold">
								Tambah Pasien
							</span>
							<div id="modal-modal-description" className="mt-3">
								<form action="sumbit" className='grid'>
									{/* Titile */}
									<div className="Title mb-4 text-xs">
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
													<MenuItem value={1}>Tn.</MenuItem>
													<MenuItem value={2}>Nn.</MenuItem>
													<MenuItem value={3}>Ny.</MenuItem>
													<MenuItem value={4}>An.</MenuItem>
												</Select>
											</FormControl>
										</label>
									</div>
									{/* Nama Lengkap */}
									<div className="Fullname mb-4">
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
									<div className="Title mb-4 text-xs">
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
													<MenuItem value={1}>Laki-laki</MenuItem>
													<MenuItem value={2}>Perempuan</MenuItem>
												</Select>
											</FormControl>
										</label>
									</div>
									{/* Nationality */}
									<div className="Title mb-4 text-xs">
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
													<MenuItem value={1}>Indonesia</MenuItem>
												</Select>
											</FormControl>
										</label>
									</div>
									{/* Tanggal Lahir */}
									<div className="flex bg-[#eeeff1] rounded-lg">
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<DatePicker
												label="Tanggal Lahir"
												inputFormat="DD/MM/YYYY"
												value={birthDate}
												onChange={handleChangeBirthDate}
												renderInput={(params) => <TextField size="small" fullWidth {...params } />}
												InputAdornmentProps={{ position: 'start' }}
												/>
										</LocalizationProvider>
									</div>
								</form>
							</div>
								<div className="submit mt-4 h-8 ml-[30%] mr-[30%] text-center rounded-xl text-white bg-green-600 hover:bg-green-800 ">
              		<input type="submit" value="Submit" onClick={handleSubmit} />
            		</div>
						</Box>
					</div>
				</div>
			</Modal>
	</button>
  )
}

export default TambahPasien