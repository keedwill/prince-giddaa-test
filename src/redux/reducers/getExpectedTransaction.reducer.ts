import {
  GET_EXPECTED_TRANSACTION_SUCCESS,
  GET_EXPECTED_TRANSACTION_REQUEST,
  GET_EXPECTED_TRANSACTION_FAIL,
} from "./../constants/getExpectedTransaction.constants";



export type expectedTransactionType = {
  loading: boolean;
  success?: boolean;
  serverResponse: {
    value?: {
      message: string;
      statusCode: number;
      data: []
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

export const getExpectedTransactionReducer = (
  state: expectedTransactionType = initialStateRequest,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case GET_EXPECTED_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        serverResponse: {},
        serverError: {},
      };

    case GET_EXPECTED_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
        serverError: {},
      };

    case GET_EXPECTED_TRANSACTION_FAIL:
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
