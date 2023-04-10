import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdSave } from "react-icons/io";
import { BASE_URL } from "../../../pages/Diagnosis";

const TandaVital = () => {
  const [masterKomponen, setMasterKomponen] = useState([]);
  const [komponen, setKomponen] = useState([]);
  const [vs_TDa, setVs_TDa] = useState();
  const [vs_TDb, setVs_TDb] = useState();
  const [vs_TB, setVs_TB] = useState();
  const [vs_BB, setVs_BB] = useState();
  const [vs_SH, setVs_SH] = useState();
  const [vs_ND, setVs_ND] = useState();
  const [vs_PP, setVs_PP] = useState();
  const listHandle = [setVs_TDa, setVs_TDb, setVs_TB, setVs_BB, setVs_SH, setVs_ND, setVs_PP]

  useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/tanda-vital',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterKomponen(response.data)
		});
	}, []);

  useEffect(() => {
		axios({
		  method: "POST",
		  url: BASE_URL + '/api/pasien/get-tanda-vital',
		  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		  data: {
			patient: localStorage.getItem("patient"),
		  },
		}).then((response) => {
			setKomponen(response.data)

		});
	}, []);

  function handleSave(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: BASE_URL + "/api/pasien/tanda-vital",
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        patient: localStorage.getItem("patient"),
        vs_TDa: vs_TDa,
        vs_TDb: vs_TDb,
        vs_TB: vs_TB,
        vs_BB: vs_BB,
        vs_SH: vs_SH,
        vs_ND: vs_ND,
        vs_PP: vs_PP,
        // idVS: masterKomponen["KdKomponen"]
				// tgl_periksa: new Date.now(),
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
    <div id="TandaVital" class="TableComponents tabcontent mb-5 border-4 border-purple-600 rounded-xl p-3">
      <div class="Title grid grid-cols-6 bg-purple-400 text-white text-sm rounded-t-xl font-bold">
        <span class="Komponen p-1.5 col-span-3">Komponen</span>
        <span class="Hasil p-1.5 col-span-2">Hasil</span>
        <span class="Hasil p-1.5 col-span-1">Satuan</span>
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3 rounded-b-xl">
        {masterKomponen.map((row, i) => 
          <>
            <div class="col-span-3 p-1 text-sm bg-white rounded-md grid grid-flow-col ">
              <p>{row.komponen}</p>
            </div>
            {komponen.length !== 0 ?
            <input type="text" class="col-span-2 p-1 text-sm bg-white rounded-md cursor-text text-center" onChange={(e) => listHandle[i](e.target.value)} placeholder={komponen[i].detail}/>
            :
            <input type="text" class="col-span-2 p-1 text-sm bg-white rounded-md cursor-text text-center" onChange={(e) => listHandle[i](e.target.value)}/>
            }
            <div class="col-span-1 p-1 text-sm rounded-md cursor-default bg-purple-100">
              <p>{row.satuan}</p>
            </div>
          </>
        )}
      </div>
     
      <div class="pt-1 flex gap-2 ml-4">
        <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-[#50A6D5] cursor-pointer" onClick={handleSave}>
          <span class="text-base flex gap-1">
            <IoMdSave />
            <p className="text-xs font-bold">Simpan</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default TandaVital;
