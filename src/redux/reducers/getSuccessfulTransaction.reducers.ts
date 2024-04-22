import {
  GET_SUCCESSFUL_TRANSACTION_REQUEST,
  GET_SUCCESSFUL_TRANSACTION_SUCCESS,
  GET_SUCCESSFUL_TRANSACTION_FAIL,
} from "../constants/getSuccessfulTransaction";

export type successfulTransactionType = {
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

export const getSuccessfulTransactionReducer = (
  state: successfulTransactionType = initialStateRequest,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case GET_SUCCESSFUL_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        serverResponse: {},
        serverError: {},
      };

    case GET_SUCCESSFUL_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
        serverError: {},
      };

    case GET_SUCCESSFUL_TRANSACTION_FAIL:
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
