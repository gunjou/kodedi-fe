import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdCalendar, IoMdSave } from "react-icons/io";

const TandaVital = () => {
  return (
    <div
      id="TandaVital"
      class="TableComponents tabcontent mb-5 border-4 border-purple-600 rounded-xl p-3"
    >
      <div class="Title grid grid-cols-7 bg-purple-400 text-white text-sm rounded-t-xl font-bold">
        <span class="Komponen p-1.5 pl-4 col-span-3">Komponen</span>
        <span class="Hasil p-1.5 pl-3 col-span-2">Hasil</span>
        <span class="Hasil p-1.5 pl-3 col-span-1">Satuan</span>
        <span class="Action p-1.5 pl-4 col-span-1"></span>
      </div>
      <div class="Row grid grid-cols-7 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-3 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Tinggi</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>165</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>cm</p>
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
      <div class="Row grid grid-cols-7 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-3 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Berat</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>70</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>kg</p>
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
      <div class="Row grid grid-cols-7 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-3 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Suhu</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>36.5</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>°C</p>
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
      <div class="Row grid grid-cols-7 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-3 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Nadi</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>100</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>bpm</p>
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
      <div class="Row grid grid-cols-7 bg-purple-200 p-1.5 gap-3">
        <div class="col-span-3 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Pernafasan</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>20</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>TTV</p>
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
      <div class="Row grid grid-cols-7 bg-purple-200 p-1.5 gap-3 rounded-b-xl">
        <div class="col-span-3 text-xs bg-white rounded-md pl-3 pt-1.5 grid grid-flow-col cursor-pointer">
          <p>Tekanan Darah</p>
          <i class="fa-solid fa-caret-down p-0.5 pr-3 justify-self-end"></i>
        </div>
        <div class="col-span-2 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>120/79</p>
        </div>
        <div class="col-span-1 text-xs bg-white rounded-md pl-3 pt-1.5 cursor-text">
          <p>mmHg</p>
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

export default TandaVital;
