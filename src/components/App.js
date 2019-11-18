import React from "react";
import { Layout, Button } from "antd";

import AppHeader from "./AppHeader";

import "./App.css";

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
