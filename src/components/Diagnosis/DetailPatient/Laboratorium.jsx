import React, { useState, useEffect } from "react";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { IoIosArrowForward, IoIosArrowDown, IoMdSave } from "react-icons/io";
import { BASE_URL } from '../../../pages/Diagnosis';
import axios from "axios";
import { Box } from "@mui/material";


const Laboratorium = () => {
  const [nodeKomponen, setNodeKomponen] = useState([]);
  const [masterKomponen, setMasterKomponen] = useState([]);

  useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/laboratorium-node',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setNodeKomponen(response.data)
		});
	}, []);
  
  useEffect(() => {
		axios.get(
			BASE_URL + '/api/master/laboratorium',
			{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
		).then((response) => {
			setMasterKomponen(response.data)
			// console.log(response.data)
		});
	}, []);

  return (
    <div className='Anamnesis'>
        <div id="Anamnesis" class="TableComponents tabcontent text-left mb-5 border-4 border-purple-600 rounded-xl rounded-tl-none p-3">
          <p className='pl-2 pb-1 font-bold'>Hasil Pemeriksaan Pasien</p>
          <Box sx={{ height: 300, width: '99%' }}>
              <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<IoIosArrowDown />}
                defaultExpandIcon={<IoIosArrowForward />}
                sx={{ height: 300, flexGrow: 1, maxWidth: 790, overflowY: 'auto' }}
                >
                  <span className="grid grid-cols-6 gap-3 text-center font-bold text-xs">
                    <div class="col-span-2 p-1 text-sm rounded-md cursor-default text-left pl-8"><p>Komponen</p></div>
                    <div class="col-span-2 p-1 text-sm rounded-md cursor-default"><p>Hasil</p></div>
                    <div class="col-span-1 p-1 text-sm rounded-md cursor-default"><p>Satuan</p></div>
                    <div class="col-span-1 p-1 text-sm rounded-md cursor-default"><p>Nilai Normal</p></div>
                  </span>
                  {nodeKomponen.map((row, i) =>
                  <>
                  <TreeItem nodeId={row.id} label={row.komponen}>
                    {masterKomponen.map((row2, index) =>
                      row2.kode_head === row.id ?
                      <span className="grid grid-cols-6 gap-3 pb-1 pr-2">
                        <TreeItem nodeId={row2.id} label={row2.komponen} className="col-span-2"/>
                        <input type="text" class="col-span-2 p-1 text-xs bg-white border border-gray-700 rounded-md cursor-text text-center" />
                        <div class="col-span-1 p-1 text-sm rounded-md cursor-default bg-purple-100">
                          <p>{row2.satuan}</p>
                        </div>
                        <div class="col-span-1 p-1 text-sm rounded-md cursor-default bg-purple-100">
                          <p>{row2.nilai_normal}</p>
                        </div>
                      </span>
                      :
                      ""
                    )}
                  </TreeItem>
                  {/* <TreeItem nodeId="5" label="Tinja">
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                      <TreeItem nodeId="8" label="index.js" />
                    </TreeItem>
                  </TreeItem> */}
                  </>
                  )}
              </TreeView>
            </Box>
        <div class="pt-1 flex gap-2 ml-4">
          <span class="p-2 mt-3 flex-none rounded-full text-xs text-white bg-[#50A6D5] cursor-pointer" >
            <span class="text-base flex gap-1">
              <IoMdSave />
              <p className="text-xs font-bold">Simpan</p>
            </span>
          </span>
        </div>
        {/* <div class="pt-2 flex gap-2 ml-4">
          <button className="Add p-1 pt-1 font-bold border bg-green-500 rounded-2xl flex text-white">
            <p className="pl-3 pr-3 text-sm">Simpan</p>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Laboratorium;
