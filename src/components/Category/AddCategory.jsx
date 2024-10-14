import { Button, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'

export default function AddCategory() {
    const [categoryName,setCategoryName] = useState('')
    const [discretion,setDescretion] = useState('')

      const handleUploadCategory = async () => {
        
        const data = await axios.post(
          "http://localhost:9000/api/v1/category/createCategory",
          {
            name: categoryName,
            description: discretion,
          }
        );
      };
  return (
    <div className="pt-4 ">
      <div>
        <h5 className="font-sans text-base text-slate-900 pb-2">
          Category Name :
        </h5>
        <Input
          className="w-4/5"
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
        />
      </div>

      <div className="py-4">
        <h5 className="font-sans text-base text-slate-900 pb-2">
          Descretion :
        </h5>
        <Input
          className="w-4/5 "
          onChange={(e) => setDescretion(e.target.value)}
          placeholder="Descretion"
        />
      </div>

      <Button
        type="primary"
        className="font-sans text-sm"
        onClick={handleUploadCategory}
      >
        Create Category
      </Button>
    </div>
  );
}
