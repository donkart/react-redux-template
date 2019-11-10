import React, { Component } from "react";

import { Modal, Icon, Button } from "antd";

export default class EditModal extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;

    return (
      <div>
        <Icon type="edit" onClick={this.showModal} />
        <Modal
          visible={visible}
          title={this.props.title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={""} // we need to remove the default footer
          width={700}
        >
          {this.props.children}
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button
              key="back"
              onClick={this.handleCancel}
              style={{ margin: 2 }}
            >
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
              style={{ backgroundColor: "green", color: "white", margin: 2 }}
            >
              Determine
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
