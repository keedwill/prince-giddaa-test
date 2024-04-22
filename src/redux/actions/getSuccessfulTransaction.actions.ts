import { Dispatch } from "redux";

import axios from "axios";
import { GET_SUCCESSFUL_TRANSACTION_FAIL, GET_SUCCESSFUL_TRANSACTION_REQUEST,GET_SUCCESSFUL_TRANSACTION_SUCCESS } from '../constants/getSuccessfulTransaction';


export const getSuccessfulTransactionAction =
  (authToken: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_SUCCESSFUL_TRANSACTION_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await axios.get(
        "https://dev-api.giddaa.com/developer/transaction/get-succesful-payments",
        config
      );

      dispatch({ type: GET_SUCCESSFUL_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_SUCCESSFUL_TRANSACTION_FAIL,
        payload: error,
      });
    }
  };
