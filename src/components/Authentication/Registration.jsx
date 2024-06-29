import React, { useState } from "react";
import { Alert, Button, Card, DatePicker, Form, Input } from "antd";
import axios from "axios";

const Registration = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleRegistration = async () => {
    const res = await axios.post(
      "http://localhost:9000/api/v1/authentication/registration",
      inputValue
    );
    console.log(error);
    if (res.data.success) {
      setSuccess(res.data.success);
      setError("");
      setInputValue("");
    } else {
      setError(res.data.error);
      setSuccess("");
    }
  };
  const [inputValue, setInputValue] = useState({
    fastName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputsValues = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <div className="mt-10">
      <div className="w-[400px] m-auto">
        {success && <Alert message={success} type="success" showIcon />}
        {error && <Alert message={error} type="error" showIcon />}
      </div>
      <Card
        title="Registration"
        bordered={false}
        style={{
          width: 600,
          margin: "auto",
        }}
      >
        <Form
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="vertical"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Frist Name">
            <Input
              onChange={(e) => handleInputsValues(e)}
              name="fastName"
              value={inputValue.fastName}
            />
          </Form.Item>
          <Form.Item label="List Name">
            <Input
              onChange={(e) => handleInputsValues(e)}
              name="lastName"
              value={inputValue.lastName}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              onChange={(e) => handleInputsValues(e)}
              name="email"
              value={inputValue.email}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              onChange={(e) => handleInputsValues(e)}
              type="password"
              name="password"
              value={inputValue.password}
            />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={handleRegistration}
              style={{ marginTop: "20px" }}
              type="primary"
            >
              Sing Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Registration;
