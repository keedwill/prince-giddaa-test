import { Dispatch } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constants/login.contants";
import axios from "axios";

export const loginAction =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const postData = {
        email,
        password,
      };

      const { data } = await axios.post(
        "https://dev-api.giddaa.com/account/login",
        postData
      );

      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
    }
  };
