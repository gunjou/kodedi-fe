import axios from "axios";
import React, { useEffect, useState } from "react";

const ProgressCard = () => {
	const [count, setcount] = useState([]);

	useEffect(() => {
		axios.get(
			'https://kodedi.id/api/pasien/status',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setcount(response.data)
		});
	}, []);
  return (
    <div className="ProgressCard grid">
			<div class="title grid grid-cols-3 gap-6 bg-[#DBA92C] p-2 text-white rounded-t-xl text-center font-bold">
				<span class="pl-3">Antri</span>
				<span class="">Proses</span>
				<span class="pr-3">Selesai</span>
			</div>
			<div class="title grid grid-cols-3 gap-6 bg-[#F5C444] p-2 pt-7 pb-6 text-white rounded-b-xl text-3xl text-center font-bold">
				<span class="pl-3">{count['antri']}</span>
				<span class="">{count['proses']}</span>
				<span class="pr-3">{count['selesai']}</span>
			</div>
    </div>
  )
}

export default ProgressCard