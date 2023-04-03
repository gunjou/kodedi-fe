import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosMan, IoIosWoman } from "react-icons/io";

const PatientCard = () => {
  const [count, setcount] = useState([]);

	useEffect(() => {
		axios.get(
			'https://kodedi.id/api/pasien/count',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setcount(response.data)
		});
	}, []);

  return (
    <div className="PatientCard grid grid-cols-3">
      <div class="p-2 col-span-2 bg-purple-600 flex gap-5 font-bold text-center text-white rounded-l-xl place-content-center">
        <div class="Male pt-6 ">
					<IoIosMan className="text-[50px]"/>
          <p class="text-lg">{count['laki-laki']}</p>
        </div>
        <div class="Female pt-6">
          <i class="fa-solid fa-person-dress text-[50px]"></i>
					<IoIosWoman className="text-[50px]"/>
          <p class="text-lg">{count['perempuan']}</p>
        </div>
      </div>
      <div class="p-2 bg-purple-800 flex gap-10 font-bold text-center text-white rounded-r-xl">
        <div class="Total pt-3 ">
          <p class="text-lg text-center">Total</p>
          <p class="text-[50px]">{count['total']}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
