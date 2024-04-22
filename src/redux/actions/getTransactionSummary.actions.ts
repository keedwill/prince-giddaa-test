import { Dispatch } from "redux";

import axios from "axios";
import { GET_TRANSACTION_SUMMARY_FAIL, GET_TRANSACTION_SUMMARY_REQUEST, GET_TRANSACTION_SUMMARY_SUCCESS } from "../constants/getTransactionSummary.constants";


export const getTansactionSummaryAction =
  (authToken: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_TRANSACTION_SUMMARY_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await axios.get(
        "https://dev-api.giddaa.com/developer/transaction/get-summary",
        config
      );

      dispatch({ type: GET_TRANSACTION_SUMMARY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_TRANSACTION_SUMMARY_FAIL,
        payload: error,
      });
    }
  };
