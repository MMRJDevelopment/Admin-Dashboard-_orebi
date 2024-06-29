import React from "react";
import { Input, Col, Row, Select, Space, Button } from "antd";
import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

export default function AddProduct() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [datastore, setStoreData] = useState([]);
  const [optiondata, setOptionData] = useState();
  const [productname, setProductName] = useState("");
  const [storename, setStoreName] = useState("");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleUploadProduct = async () => {
    console.log(productname, "Product name");
    console.log(
      draftToHtml(convertToRaw(editorState.getCurrentContent())),
      "desption"
    );
    console.log(storename, "store");
    const dat = await axios.post(
      "http://localhost:9000/api/v1/product/createProduct",
      {
        name: productname,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        store: storename,
      }
    );
  };

  useEffect(() => {
    async function getAllStore() {
      const response = await axios.get(
        "http://localhost:9000/api/v1/marchant/getallstore"
      );
      setStoreData(response.data);
      let arr = [];
      response.data.map((item) => {
        arr.push({
          lable: item.storename,
          value: item._id,
        });
        setOptionData(arr);
      });
    }
    getAllStore();
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  console.log("option data: ", optiondata);
  return (
    <>
      <Row>
        <Col span={22}>
          <div>
            <h5>Product Name :</h5>
            <Input
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter Name"
            />
            <h5>Product Description :</h5>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
            />
            <h5 style={{ marginTop: "30px" }}>All Store Name Enter</h5>
            <Select
              onChange={(e) => setStoreName(e)}
              style={{
                width: "100%",
              }}
              options={optiondata}
            />

            <Button
              onClick={handleUploadProduct}
              style={{ marginTop: "20px" }}
              type="primary"
            >
              Product Upload{" "}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
