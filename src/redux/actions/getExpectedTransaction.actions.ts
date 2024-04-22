import { Dispatch } from "redux";

import axios from "axios";
import { GET_EXPECTED_TRANSACTION_FAIL, GET_EXPECTED_TRANSACTION_REQUEST, GET_EXPECTED_TRANSACTION_SUCCESS } from "../constants/getExpectedTransaction.constants";


export const getExpectedTransactionAction =
  (authToken: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_EXPECTED_TRANSACTION_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await axios.get(
        "https://dev-api.giddaa.com/developer/transaction/get-expected-payments",
        config
      );

      dispatch({ type: GET_EXPECTED_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_EXPECTED_TRANSACTION_FAIL,
        payload: error,
      });
    }
  };
