import React from "react";

import "./App.css";

import AppHeader from "./AppHeader";

import { Layout, Button } from "antd";
const { Footer } = Layout;

export default ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      {children}
      <Footer style={{ textAlign: "center" }}>
        <Button style={{ backgroundColor: "green", color: "white" }}>
          Back to home
        </Button>
      </Footer>
    </Layout>
  );
};
