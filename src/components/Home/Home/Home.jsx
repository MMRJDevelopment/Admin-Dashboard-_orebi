import { AppstoreOutlined } from "@ant-design/icons";
import { Menu, Col, Row } from "antd";

import { FaUserFriends } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiLayoutHorizontalLine } from "react-icons/ri";

import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Users", "sub1", <FaUserFriends />, [
    getItem("Merhcant", "/login"),
    getItem("User", "2"),
  ]),
  {
    type: "divider",
  },
  getItem("Products", "sub2", <AiFillProduct />, [
    getItem("Add Product", "/addProduct", <MdOutlineAddCircleOutline />),
    getItem("All Product", "/allProduct", <RiLayoutHorizontalLine />),
    getItem("All Variant", "/allVariant", <RiLayoutHorizontalLine />),
  ]),
  {
    type: "divider",
  },
  getItem("Category", "sub3", <AppstoreOutlined />, [
    getItem("Add Category", "5"),
    getItem("All Category ", "6"),
  ]),
  {
    type: "divider",
  },
  getItem("Sub Category", "sub4", <AppstoreOutlined />, [
    getItem("Add Sub Category", "7"),
    getItem("All Sub Category ", "8"),
  ]),
];
function Home() {
  const data = useSelector((state) => state.userInfo.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, []);
  console.log(data);

  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <div>
      <Row>
        <Col span={4}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
