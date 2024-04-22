import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, loginResponseType } from "./reducers/login.reducers";
import { authReducer, tokenResponseType } from "./reducers/auth.reducer";
import {
  defaultTransactionType,
  getDefaultTransactionReducer,
} from "./reducers/getDefaultTransaction.reducer";
import { expectedTransactionType, getExpectedTransactionReducer } from "./reducers/getExpectedTransaction.reducer";
import { getSuccessfulTransactionReducer, successfulTransactionType } from "./reducers/getSuccessfulTransaction.reducers";
import { getTransactionSummaryReducer, transactionSummaryType } from "./reducers/getTransactionSummary.reducer";

export type ReducersType = {
  loginRes: loginResponseType;
  token: tokenResponseType;
  defaultTransaction: defaultTransactionType;
  expectedTransaction:expectedTransactionType;
  successfullTransaction:successfulTransactionType
  transactionSummary: transactionSummaryType
};

const reducer = combineReducers({
  loginRes: loginReducer,
  token: authReducer,
  defaultTransaction: getDefaultTransactionReducer,
  expectedTransaction: getExpectedTransactionReducer,
  successfullTransaction:getSuccessfulTransactionReducer,
  transactionSummary:getTransactionSummaryReducer
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
