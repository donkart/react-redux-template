import React, { Component } from "react";

import { connect } from "react-redux";

import { Layout, Menu, Icon } from "antd";
const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: "64px", float: "right" }}
        >
          <Menu.Item>
            <Icon type="profile" />
          </Menu.Item>
          <Menu.Item>
            <Icon type="logout" />
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(AppHeader);
