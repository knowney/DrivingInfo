import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./layout/Sidebar";
import Data from "./cooking/Data";
import CarInfo from "./cooking/Car_info";
import "./App.css"; // นำเข้า App.css

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        {/* Sidebar */}
        <Sidebar /> {/* ใช้ Sidebar ที่เราได้สร้างไว้ */}
        <Layout>
          {/* Header */}
          <Header className="header">
            <div className="header-content">
              <h3>Header Content</h3>
            </div>
          </Header>

          {/* Content */}
          <Content className="content">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<h1>Welcome to the homepage</h1>} />
                <Route path="/data" element={<Data />} />
                <Route path="/car_information" element={<CarInfo />} />
              </Routes>
            </div>
          </Content>

          {/* Footer */}
          <Footer className="footer">
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
