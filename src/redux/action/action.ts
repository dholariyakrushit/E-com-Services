import { Dispatch } from "redux";

import { fetchData } from "../../api/api";
import { ActionType } from "../ActionType";
import { Action } from "../reducers/reducer";

export const fetchPosts = (skip: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_POST_START,
    });
    fetchData(skip)
      .then((response) => {
        const posts = response.data;
        dispatch({
          type: ActionType.FETCH_POST_SUCCESS,
          payload: posts,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionType.FETCH_POST_FAIL,
          payload: error,
        });
      });
  };
};
