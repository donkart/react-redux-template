import { combineReducers } from 'redux';
import auth from './auth'
import form from './form'
import accounts from './accounts'
// import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    accounts: accounts,
    form: form,
    auth: auth
});