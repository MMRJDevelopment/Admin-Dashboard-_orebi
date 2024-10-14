import { Button, Popconfirm, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function () {
  const [allVariantData, setAllVariantData] = useState([]);
  useEffect(() => {
    async function getAllVariant() {
      const data = await axios.get(
        "http://localhost:9000/api/v1/product/allVariant"
      );
      setAllVariantData(data.data);
    }
    getAllVariant();
  });

  const columns = [
    {
      title: "Serial",
      dataIndex: "index",
      key: "index",
      render: (_, _record, index) => <p>{index + 1} </p>,
    },
    {
      title: "Products",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img style={{ width: 60, height: 60 }} src={record.image} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>

          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={allVariantData} columns={columns} />;
    </div>
  );
}
