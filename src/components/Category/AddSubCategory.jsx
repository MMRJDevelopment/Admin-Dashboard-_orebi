import { Button, Input, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddSubCategory() {
  const [categoryName, setSubCategoryName] = useState("");
  const [discretion, setDescretion] = useState("");
  const [category, setCategoryName] = useState("");
  const [optiondata, setOptionData] = useState([]);

  const handleUploadSubCategory = async() => {
    const sendData = await axios.post(
      "http://localhost:9000/api/v1/category/subCreateCategory",
      {
        name: categoryName,
        description: discretion,
        category: category,
      }
    );
    
  };

  useEffect(() => {
    async function getAllCategory() {
      const data = await axios.get(
        "http://localhost:9000/api/v1/category/getAllCategory"
      );
      let arr = [];
      data.data.map((item) => {
        arr.push({
          label: item.name,
          value: item._id,
        });
        setOptionData(arr);
      });
      console.log(data.data);
    }
    getAllCategory();
  },[]);
  return (
    <div>
      <div className="w-10/12 my-4">
        <h5 className="pb-2 font-sans text-base text-slate-900">
          Category Name Enter
        </h5>
        <Select
          onChange={(e) => setCategoryName(e)}
          style={{
            width: "100%",
          }}
          options={optiondata}
        />
      </div>

      <div>
        <h5 className="font-sans text-base text-slate-900 pb-2">
          Sub Category Name :
        </h5>
        <Input
          className="w-10/12"
          onChange={(e) => setSubCategoryName(e.target.value)}
          placeholder="Category Name"
        />
      </div>

      <div className="py-4">
        <h5 className="font-sans text-base text-slate-900 pb-2">
          Descretion :
        </h5>
        <Input
          className="w-10/12 "
          onChange={(e) => setDescretion(e.target.value)}
          placeholder="Descretion"
        />
      </div>
      <Button
        type="primary"
        className="font-sans text-sm"
        onClick={handleUploadSubCategory}
      >
        Create Category
      </Button>
    </div>
  );
}
