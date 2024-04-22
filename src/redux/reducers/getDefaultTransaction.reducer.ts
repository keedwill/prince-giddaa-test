
import {
  GET_DEFAULT_TRANSACTION_REQUEST,
  GET_DEFAULT_TRANSACTION_SUCCESS,
  GET_DEFAULT_TRANSACTION_FAIL,
} from "../constants/getDefaultTransaction.constants";


export type defaultTransactionType = {
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

export const getDefaultTransactionReducer = (
  state: defaultTransactionType = initialStateRequest,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case GET_DEFAULT_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        serverResponse: {},
        serverError: {},
      };

    case GET_DEFAULT_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
        serverError: {},
      };

    case GET_DEFAULT_TRANSACTION_FAIL:
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
