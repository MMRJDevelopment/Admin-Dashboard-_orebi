import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button, Popconfirm, message } from "antd";
import axios from "axios";

const columns = [
  {
    title: "Serial",
    dataIndex: "key",
    key: "key",
    render: (number) => <p>{number + 1}</p>,
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (_, record) => (
      <img
        style={{ width: "80px" }}
        src="https://www.ryans.com/storage/products/main/gigabyte-nvidia-geforce-gt-710-2gb-gddr5-graphics-11576395398.webp"
      />
    ),
  },
  {
    title: "Stero Name",
    dataIndex: "storename",
    key: "storename",
    render: (_, render) => <p>{render.store.storename}</p>,
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags &&
          tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button onClick={handeleDelete} type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];
export default function AllProduct() {
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState([]);

  const confirm = () => {
    setOpen(false);
    message.success("Product Delete Successfully");
  };

  useEffect(() => {
    async function getAllProduct() {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/v1/product/allProduct"
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    getAllProduct();
  }, [productData]);

  const handeleDelete = (_id) => {
    const data = axios.post(
      "http://localhost:9000/api/v1/product/deleteProduct",
      {
        _id: _id,
      }
    );
    confirm();
  };

  const columns = [
    {
      title: "Serial",
      dataIndex: "key",
      key: "key",
      render: (number) => <p>{number + 1}</p>,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img
          style={{ width: "70px" }}
          src="https://www.ryans.com/storage/products/main/gigabyte-nvidia-geforce-gt-710-2gb-gddr5-graphics-11576395398.webp"
        />
      ),
    },
    {
      title: "Stero Name",
      dataIndex: "storename",
      key: "storename",
      render: (_, render) => <p>{render.store.storename}</p>,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags &&
            tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Popconfirm open={open} onConfirm={confirm}>
            <Button
              onClick={() => handeleDelete(record._id)}
              type="primary"
              danger
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={productData.map((product, index) => ({
          ...product,
          key: index, // Ensure a unique key for each item
        }))}
      />
    </div>
  );
}
