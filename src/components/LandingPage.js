import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import { Layout, Button, Row, Col, Icon } from "antd";

import AccountNumberModal from "./AccountNumberModal";

import "./LandingPage.css";

const { Content } = Layout;

class LandingPage extends Component {
  render() {
    return (
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div>
          <h1 style={{ paddingTop: 30, paddingBottom: 30 }}>My Retirement</h1>
          <div style={{ background: "#fff", padding: 50, minHeight: 380 }}>
            <h2 className="lineFloat">
              <span>Manage</span>
              <Button>Enquire History</Button>
            </h2>
            <hr />
            <Row>
              <Col span={11}>
                <div className="formLine">
                  <span>
                    Creation Date:
                    <span className="blueValue">
                      {this.props.form.creationDate}
                    </span>
                  </span>
                </div>

                <div className="formLine">
                  <span>
                    Account number:
                    <span className="blueValue">
                      {this.props.form.selectedAccountNumber}
                    </span>
                  </span>
                  <AccountNumberModal title="Change account number:"></AccountNumberModal>
                </div>
                <div className="formLine">
                  <span>
                    Charge date:
                    <span className="blueValue">
                      {this.props.form.chargeDate} (Next payment date:
                      {this.props.form.nextPaymentDate})
                    </span>
                  </span>
                  <Icon type="edit" />
                </div>

                <div className="formLine">
                  <span>
                    Status:
                    <span className="blueValue">{this.props.form.status}</span>
                  </span>
                  <Button>Suspension of investment</Button>
                </div>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <div className="formLine">
                  <span>
                    Investment amount:
                    <span className="blueValue">
                      TWD {this.props.form.investmentAmount} (per month)
                    </span>
                  </span>
                  <Button>Adjust amount</Button>
                </div>

                <div className="formLine">
                  <span>
                    Accumulated investment amount:
                    <span className="blueValue">
                      TWD {this.props.form.accumulatedInvestmentAmount}
                    </span>
                  </span>
                </div>

                <div className="formLine">
                  <span>
                    Current market value:
                    <span className="blueValue">
                      TWD {this.props.form.currentMarketValue}
                    </span>
                  </span>
                  <Button>Redemption</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return { form: state.form };
}

export default connect(mapStateToProps, actions)(LandingPage);
