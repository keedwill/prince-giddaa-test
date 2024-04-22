import {
  GET_TRANSACTION_SUMMARY_FAIL,
  GET_TRANSACTION_SUMMARY_REQUEST,
  GET_TRANSACTION_SUMMARY_SUCCESS,
} from "../constants/getTransactionSummary.constants";

export type transactionSummaryType = {
  loading: boolean;
  success?: boolean;
  serverResponse: {
    value?: {
      message: string;
      statusCode: number;
      value: {
        token: string;
      };
    };
  };
  serverError?: {
    response?: {
      data: {
        value: {
          message: string;
        };
      };
    };
  };
};

export const initialStateRequest = {
  loading: false,
  success: false,
  serverResponse: {},
  serverError: {},
};

export const getTransactionSummaryReducer = (
  state: transactionSummaryType = initialStateRequest,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case GET_TRANSACTION_SUMMARY_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        serverResponse: {},
        serverError: {},
      };

    case GET_TRANSACTION_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
        serverError: {},
      };

    case GET_TRANSACTION_SUMMARY_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        serverResponse: {},
        serverError: action.payload,
      };

    default:
      return state;
  }
};
