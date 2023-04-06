import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdCalendar, IoMdSave } from "react-icons/io";
import { BASE_URL } from "../../../pages/Diagnosis";

const TandaVital = () => {
  const [masterKomponen, setMasterKomponen] = useState([]);

  useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/tanda-vital',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterKomponen(response.data)
		});
	}, []);

  return (
    <div id="TandaVital" class="TableComponents tabcontent mb-5 border-4 border-purple-600 rounded-xl p-3">
      <div class="Title grid grid-cols-6 bg-purple-400 text-white text-sm rounded-t-xl font-bold">
        <span class="Komponen p-1.5 col-span-3">Komponen</span>
        <span class="Hasil p-1.5 col-span-2">Hasil</span>
        <span class="Hasil p-1.5 col-span-1">Satuan</span>
        {/* <span class="Action p-1.5 col-span-1"></span> */}
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3 rounded-b-xl">
        {masterKomponen.map((row) => 
          <>
            <div class="col-span-3 p-1 text-sm bg-white rounded-md grid grid-flow-col cursor-pointer">
              <p>{row.komponen}</p>
              {/* <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i> */}
            </div>
            <input type="text" class="col-span-2 p-1 text-sm bg-white rounded-md cursor-text" />
              {/* <p>165</p>
            </input> */}
            <div class="col-span-1 p-1 text-sm bg-white rounded-md cursor-text">
              <p>{row.satuan}</p>
            </div>
            {/* <div class="col-span-1 p-1 flex gap-3 justify-center">
              <span class="rounded-full text-white text-xs bg-[#50A6D5] cursor-pointer">
                <p class="p-1">
                  <IoMdCalendar />
                </p>
              </span>
              <span class="rounded-full text-white text-xs bg-red-500 cursor-pointer">
                <p class="p-1">
                  <FaMinus />
                </p>
              </span>
            </div> */}
          </>
        )}
      </div>
     
      <div class="pt-1 flex gap-2 ml-4">
        <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-green-500 cursor-pointer">
          <span class="text-base">
            <FaPlus />
          </span>
        </span>
        <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-[#50A6D5] cursor-pointer">
          <span class="text-base">
            <IoMdSave />
          </span>
        </span>
      </div>
    </div>
  );
};

export default TandaVital;
