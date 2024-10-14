import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function CategoryStatus() {
  const [allCategoryStatus, setAllCategoryStatus] = useState([]);

  useEffect(() => {
    async function grtAllCategory() {
      const data =await axios.get(
        "http://localhost:9000/api/v1/category/getAllCategory"
      );
      setAllCategoryStatus(data.data);
    }
    grtAllCategory();
  },[]);
  console.log(allCategoryStatus);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "isActive",
      dataIndex: "isActive",
      key: "isActive",
      render:(isActive)=><p>{isActive?"Active":"In Active"}</p>
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
      <Table dataSource={allCategoryStatus} columns={columns} />;
    </div>
  );
}
