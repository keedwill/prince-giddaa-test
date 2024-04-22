import {
  LOGIN_SUCCESS_FAIL,
  LOGIN_SUCCESS_REQUEST,
  LOGIN_SUCCESS_SUCCESS,
} from "../constants/loginSuccess.contants";

export const initialStateRequest = {
  token: null,
};

export type tokenResponseType = {
  token: string | null;
};

export const authReducer = (
  state: tokenResponseType = initialStateRequest,
  action: { type: string; payload: tokenResponseType }
) => {
  switch (action.type) {
    case LOGIN_SUCCESS_REQUEST:
      return { ...state, token: null };
    case LOGIN_SUCCESS_SUCCESS:
      return { ...state, token: action.payload.token };
    case LOGIN_SUCCESS_FAIL:
      return { ...state, token: null };
    default:
      return state;
  }
};
