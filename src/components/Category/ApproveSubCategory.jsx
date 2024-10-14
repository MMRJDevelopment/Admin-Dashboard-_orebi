import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

// Helper function to convert a string to title case
export const titleCase = (str) => {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function ApproveSubCategory() {
  const [allSubCategoryStatus, setallSubCategoryStatus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handelShow = (item) => {
    setCategoryName(item.name);
    setShowModal(true);
  };

  useEffect(() => {
    async function getAllCategory() {
      const data = await axios.get(
        "http://localhost:9000/api/v1/category/getAllSubCategory"
      );
      setallSubCategoryStatus(data.data);
    }
    getAllCategory();
  }, [allSubCategoryStatus]);

  function handleDelete (){
    const subCategoryDelete = axios .delete("")
  }

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <p>{titleCase(name)}</p>, // Convert to title case
    },
    {
      title: "isActive",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) => <p>{isActive ? "Active" : "In Active"}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <p>{titleCase(status)}</p>,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div>
          <Button
            type="primary"
            className="mr-4"
            onClick={() => handelShow(record)}
          >
            Edit Status
          </Button>
          <Button type="primary" danger onChange={handleDelete}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="pr-20">
      <Table dataSource={allSubCategoryStatus} columns={columns} />
      <Modal
        isShow={showModal}
        categoryName={categoryName}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
}
