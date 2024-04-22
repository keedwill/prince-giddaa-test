import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constants/login.contants";

export type loginResponseType = {
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

export const loginReducer = (
  state: loginResponseType = initialStateRequest,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        serverResponse: {},
        serverError: {},
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
        serverError: {},
      };

    case LOGIN_FAIL:
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
