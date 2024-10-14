import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { titleCase } from "./ApproveSubCategory";

export default function ApproveCategory() {
  const [allCategoryStatus, setAllCategoryStatus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handelShow = (item) => {
    setCategoryName(item.name);
    setShowModal(true);
  };

  useEffect(() => {
    async function grtAllCategory() {
      const data = await axios.get(
        "http://localhost:9000/api/v1/category/getAllCategory"
      );
      setAllCategoryStatus(data.data);
    }
    grtAllCategory();
  }, [allCategoryStatus]);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <p>{titleCase(name)}</p>,
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
            className=" mr-4"
            onClick={() => handelShow(record)}
          >
            Edit Status
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="pr-20">
      <Table dataSource={allCategoryStatus} columns={columns} />;
      <Modal
        isShow={showModal}
        categoryName={categoryName}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
}
