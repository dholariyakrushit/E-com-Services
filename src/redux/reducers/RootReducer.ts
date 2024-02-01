import { combineReducers } from "redux";

import reducer from "./reducer";
import CartReducer from "./CartReducer";
const Rootreducer = combineReducers({
  reducer,
  CartReducer
});

export default Rootreducer;
export type RootState = ReturnType<typeof Rootreducer>;
