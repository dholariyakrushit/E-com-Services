import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Rootreducer from "../reducers/RootReducer";

const store = createStore(Rootreducer, {}, applyMiddleware(thunk));

export default store;
