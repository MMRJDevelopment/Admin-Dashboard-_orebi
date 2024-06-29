import React from "react";
import { Alert, Space, Button } from "antd";
import { Link } from "react-router-dom";
export default function Error() {
  const buttonStyle = {
    marginTop: "20px",
  };
  return (
    <div>
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
      <Button type="primary" style={buttonStyle}>
        <Link to="/"> Back To Home</Link>
      </Button>
    </div>
  );
}
