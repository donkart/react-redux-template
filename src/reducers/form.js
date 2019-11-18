import { FORM_UPDATE } from "actions/types";

const INITIAL_STATE = {
  creationDate: "2019-01-18",
  selectedAccountNumber: "001077019304",
  chargeDate: "1 of the month",
  nextPaymentDate: "2020-01-18",
  status: "Monthly Charge",
  investmentAmount: 50000,
  accumulatedInvestmentAmount: 50000,
  currentMarketValue: 50011
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FORM_UPDATE:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}
