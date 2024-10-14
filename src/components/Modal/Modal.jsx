import { Button } from "antd";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { titleCase } from "../Category/ApproveSubCategory";

// eslint-disable-next-line react/prop-types
export default function Modal({ isShow, closeModal, categoryName }) {
  if (!isShow) return null;
  const [statusData, setstatusData] = useState("");

  const handelApply = async () => {
    console.log(categoryName);
    console.log(statusData);
    const data = await axios.post(
      "http://localhost:9000/api/v1/category/createCategoryStatus",
      {
        name: categoryName,
        status: statusData,
      }
    );
    const subCategoryStatusData = await axios.post(
      "http://localhost:9000/api/v1/category/subCategoryStatus",
      {
        name: categoryName,
        status: statusData,
      }
    );
  };

  return (
    <div className="fixed inset-0 	bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ">
      <div className=" rounded-2xl px-10 py-10 bg-white w-[400px]">
        <div>
          <h3 className="font-sans font-normal text-xl text-black pb-2">
            Category Status Change
          </h3>
          <h4 className="font-sans font-normal text-lg text-red-600 pb-4">
            {titleCase(categoryName)}
          </h4>
          <select
            value={statusData}
            onChange={(e) => setstatusData(e.target.value)}
            className="border-slate-400 px-4 py-2 border rounded-lg w-full h-[50px] outline-none font-sans font-normal text-sm text-black"
          >
            <option value="">Select a status</option>
            <option value="waiting">waiting</option>
            <option value="approved">approved</option>
            <option value="rejected">rejected</option>
          </select>
        </div>
        <div className="flex justify-between items-center gap-4 mt-10">
          <Button onClick={handelApply}>Apply</Button>
          <Button onClick={() => closeModal()}>Close</Button>
        </div>
      </div>
    </div>
  );
}
