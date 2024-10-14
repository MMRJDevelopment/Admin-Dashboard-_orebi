import { Menu, Col, Row } from "antd";

import { GrStatusGood } from "react-icons/gr";

import { AiFillProduct, AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import {
  MdOutlineAddCircleOutline,
  MdCategory,
  MdAddToPhotos,
} from "react-icons/md";
import { RiLayoutHorizontalLine } from "react-icons/ri";
import { FaFolderPlus, FaUserFriends } from "react-icons/fa";

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
function Home() {
  const data = useSelector((state) => state.userInfo.value);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, [data, navigate]);
  console.log(data);

  const onClick = (e) => {
    navigate(e.key);
  };
  const items = [
    data.role == "admin" &&
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
    getItem("Category", "sub3", <MdCategory />, [
      getItem("Add Category", "/addcategory", <FaFolderPlus />),
      getItem("All Category ", "6"),
    ]),
    {
      type: "divider",
    },
    getItem("Sub Category", "sub4", <BiSolidCategoryAlt />, [
      getItem("Add Sub Category", "/addsubcategory", <MdAddToPhotos />),
      getItem("All Sub Category ", "8"),
    ]),
    getItem("Approved Status", "sub5", <GrStatusGood />, [
      getItem(
        "Category Status",
        "/categorystatus",
        <AiOutlineSafetyCertificate />
      ),
      getItem(
        "Sub Category Status ",
        "/subcategorystatus",
        <AiOutlineSafetyCertificate />
      ),
    ]),
    data.role == "admin" &&
      getItem("Approve", "sub6", <GrStatusGood />, [
        getItem(
          "Approve Category",
          "/approveCategory",
          <AiOutlineSafetyCertificate />
        ),
        getItem(
          "Approve Sub Category ",
          "/approveSubCategory",
          <AiOutlineSafetyCertificate />
        ),
      ]),
  ];
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
  )
}

export default Home;
