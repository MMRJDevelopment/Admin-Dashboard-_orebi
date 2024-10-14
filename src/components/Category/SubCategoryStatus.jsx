import { Table } from 'antd';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function SubCategoryStatus() {
     const [allSubCategoryStatus, setAllSubCategoryStatus] = useState([]);

     useEffect(() => {
       async function getAllCategory() {
         const data = await axios.get(
           "http://localhost:9000/api/v1/category/getAllSubCategory"
         );
         setAllSubCategoryStatus(data.data);
       }
       getAllCategory();
     }, []);
    

     const columns = [
       {
         title: "Sub Category Name",
         dataIndex: "name",
         key: "name",
       },
       {
         title: "isActive",
         dataIndex: "isActive",
         key: "isActive",
         render: (isActive) => <p>{isActive ? "Active" : "In Active"}</p>,
         //   render: (_, record) => <p>{record.isActive?"Active":"In Active"}</p>,
       },
       {
         title: "Status",
         dataIndex: "status",
         key: "status",
       },
     ];
  return (
    <div>
      <Table dataSource={allSubCategoryStatus} columns={columns} />;
    </div>
  );
}
