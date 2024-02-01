import { IapiData } from "../../types";
import { ActionType } from "../ActionType";

interface InitialState {
  posts?: IapiData | null;
  loading: boolean;
  error?: null | string;
}
interface fetchPostStart {
  type: ActionType.FETCH_POST_START;
}

interface fetchPostSuccess {
  type: ActionType.FETCH_POST_SUCCESS;
  payload?: IapiData;
}

interface fetchPostFail {
  type: ActionType.FETCH_POST_FAIL;
  payload?: string;
}

const initialState: InitialState = {
  posts: null,
  loading: false,
  error: null,
};

export type Action = fetchPostStart | fetchPostSuccess | fetchPostFail;

function reducer(
  state: InitialState = initialState,
  action: Action
): InitialState {
  switch (action.type) {
    // the loading state to true.
    case ActionType.FETCH_POST_START:
      return {
        ...state,
        loading: true,
      };

    // Fetch api success and Loading state false
    case ActionType.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    // Fetch api fail and loading state false
    case ActionType.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
