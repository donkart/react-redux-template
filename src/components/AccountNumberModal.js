import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Select } from "antd";

import * as actions from "actions";

import EditModal from "./EditModal";

const { Option } = Select;

class AccountNumberModal extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  onChange = value => {
    console.log(value);
    this.props.updateForm("selectedAccountNumber", value);
  };

  render() {
    return (
      <EditModal title="Change account number:">
        <h3>Please select your debit account number:</h3>
        <Form layout="inline">
          <Form.Item>
            <Select placeholder="TWD" style={{ width: 120 }}>
              <Option value="TWD">TWD</Option>
              <Option value="USD">USD</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Select
              placeholder=""
              style={{ width: 200 }}
              value={this.props.form.selectedAccountNumber}
              onChange={this.onChange}
            >
              {_.map(this.props.accounts, (_, key) => {
                return (
                  <Option key={key} value={key}>
                    {key}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            Account balance:
            {this.props.accounts[this.props.form.selectedAccountNumber]}
          </Form.Item>
        </Form>
      </EditModal>
    );
  }
}

function mapStateToProps(state) {
  return { accounts: state.accounts, form: state.form };
}

export default connect(mapStateToProps, actions)(AccountNumberModal);
