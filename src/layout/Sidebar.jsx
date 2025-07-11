import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; // import logo
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: <Link to="/data">Data</Link>,
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: <Link to="/car_information">Car Info</Link>,
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      breakpoint="lg"
      collapsedWidth="75"
      theme="light"
      style={{
        minHeight: "100vh",
        backgroundColor: "#013467",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* โลโก้ที่อยู่ด้านบนสุดของ Sider */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <Menu
        className="sidebar-menu" // ใช้ className เพื่อใช้สไตล์จาก CSS
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
