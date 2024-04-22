import { Dispatch } from "redux";
import {
  LOGIN_SUCCESS_FAIL,
  LOGIN_SUCCESS_REQUEST,
  LOGIN_SUCCESS_SUCCESS,
} from "../constants/loginSuccess.contants";

export const loginSuccessAction =
  (authToken: string | null) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_SUCCESS_REQUEST });

      const data = { token: authToken };

      dispatch({ type: LOGIN_SUCCESS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGIN_SUCCESS_FAIL,
        payload: error,
      });
    }
  };
