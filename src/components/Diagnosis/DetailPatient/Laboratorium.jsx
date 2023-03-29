import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdCalendar, IoMdSave } from "react-icons/io";

const Laboratorium = () => {
  return (
    <div
      id="Laboratorium"
      class="TableComponents tabcontent mb-5 border-4 border-purple-600 rounded-xl p-3"
    >
      <div class="Title grid grid-cols-6 bg-purple-400 text-white text-sm rounded-t-xl font-bold">
        <span class="Komponen p-1.5 pl-4 col-span-2">Komponen</span>
        <span class="Hasil p-1.5 pl-3 col-span-1">Hasil</span>
        <span class="Hasil p-1.5 pl-3 col-span-1">Nilai Rujukan</span>
        <span class="Hasil p-1.5 pl-3 col-span-1">Satuan</span>
        <span class="Action p-1.5 pl-4 col-span-1"></span>
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Hermatologi</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>14</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>13.2 - 17.3</p>
        </div>
        <div class="col-span-1 text-xs bg-gray-200 rounded-md pl-3 pt-1.5 cursor-text">
          <p>g/dL</p>
        </div>
        <div class="col-span-1 p-1 flex gap-3 justify-center">
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
        </div>
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Urine</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>12.5</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>13 - 43</p>
        </div>
        <div class="col-span-1 text-xs bg-gray-200 rounded-md pl-3 pt-1.5 cursor-text">
          <p>mg/dL</p>
        </div>
        <div class="col-span-1 p-1 flex gap-3 justify-center">
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
        </div>
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Kimia Darah</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>146</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>150</p>
        </div>
        <div class="col-span-1 text-xs bg-gray-200 rounded-md pl-3 pt-1.5 cursor-text">
          <p>mg/dL</p>
        </div>
        <div class="col-span-1 p-1 flex gap-3 justify-center">
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
        </div>
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Serologi</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>Reaktif</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>Non Reaktif</p>
        </div>
        <div class="col-span-1 text-xs bg-gray-200 rounded-md pl-3 pt-1.5 cursor-text">
          <p>mIU/mL</p>
        </div>
        <div class="col-span-1 p-1 flex gap-3 justify-center">
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
        </div>
      </div>
      <div class="Row grid grid-cols-6 bg-purple-200 p-1.5 gap-3 rounded-b-xl">
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Faeces</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>0.25</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>0.35</p>
        </div>
        <div class="col-span-1 text-xs bg-gray-200 rounded-md pl-3 pt-1.5 cursor-text">
          <p>g/dL</p>
        </div>
        <div class="col-span-1 p-1 flex gap-3 justify-center">
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
        </div>
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

export default Laboratorium;
