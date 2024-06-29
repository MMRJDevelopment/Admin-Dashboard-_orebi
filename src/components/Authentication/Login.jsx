import React, { useState } from "react";
import { Alert, Button, Card, DatePicker, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logedIn } from "../../slices/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleInputsValues = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleLogin = async () => {
    const sendData = await axios.post(
      "http://localhost:9000/api/v1/authentication/login",
      inputValue
    );
    console.log(sendData.data);
    if (sendData.data.success) {
      if (sendData.data.role == "users") {
        setError("This Dashboard is for Admin & Merchent");
      } else {
        dispatch(logedIn(sendData.data));
        setSuccess(sendData.data.success);
        setTimeout(() => {
          navigate("/");
        }, 300);
        setError("");
      }
    } else {
      setError(sendData.data.error);
      setSuccess("");
    }
  };

  return (
    <div className="mt-10">
      <div className="w-[400px] m-auto">
        {success && <Alert message={success} type="success" showIcon />}
        {error && <Alert message={error} type="error" showIcon />}
      </div>
      <Card
        title="Login"
        bordered={false}
        style={{
          width: 800,
          margin: "auto",
        }}
      >
        <Form
          labelCol={{
            span: 36,
          }}
          wrapperCol={{
            span: 36,
          }}
          layout="vertical"
          style={{
            maxWidth: 800,
          }}
        >
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
              onClick={handleLogin}
              style={{ marginTop: "20px" }}
              type="primary"
            >
              Sing In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
