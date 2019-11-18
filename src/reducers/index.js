import { combineReducers } from "redux";
import auth from "./auth";
import form from "./form";
import accounts from "./accounts";

export default combineReducers({
  accounts: accounts,
  form: form,
  auth: auth
});
