import { Dispatch } from "redux";

import axios from "axios";
import { GET_DEFAULT_TRANSACTION_FAIL, GET_DEFAULT_TRANSACTION_REQUEST, GET_DEFAULT_TRANSACTION_SUCCESS } from "../constants/getDefaultTransaction.constants";

export const getDefaultTransactionAction =
  (authToken:string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_DEFAULT_TRANSACTION_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await axios.get(
        " https://dev-api.giddaa.com/developer/transaction/get-missed-payments",
        config
      );

      dispatch({ type: GET_DEFAULT_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_DEFAULT_TRANSACTION_FAIL,
        payload: error,
      });
    }
  };
