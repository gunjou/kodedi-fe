import React, { useState, useEffect } from "react";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BASE_URL } from '../../../pages/Diagnosis';
import axios from "axios";
import { Box } from "@mui/material";


const Laboratorium = () => {

  return (
    <div className='Anamnesis'>
        <div id="Anamnesis" class="TableComponents tabcontent text-left mb-5 border-4 border-purple-600 rounded-xl rounded-tl-none p-3">
          <p className='pl-4 font-bold'>Pilih Keluhan Pasien</p>
          <Box sx={{ height: 300, width: '60%' }}>
              <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<IoIosArrowDown />}
                defaultExpandIcon={<IoIosArrowForward />}
                sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                <TreeItem nodeId="1" label="Applications">
                  <span className="flex gap-3">
                    <TreeItem nodeId="2" label="Calendar" />
                    <input type="text" class="col-span-2 p-1 text-xs bg-white border rounded-md cursor-text text-center"/>
                  </span>
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                  <TreeItem nodeId="10" label="OSS" />
                  <TreeItem nodeId="6" label="MUI">
                    <TreeItem nodeId="8" label="index.js" />
                  </TreeItem>
                </TreeItem>
              </TreeView>
            </Box>
        <div class="pt-2 flex gap-2 ml-4">
          <button className="Add p-1 pt-1 font-bold border bg-green-500 rounded-2xl flex text-white">
            <p className="pl-3 pr-3 text-sm">Simpan</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Laboratorium;
