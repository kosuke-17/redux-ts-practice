import { combineReducers } from "redux";
import bankRreducer from "./bankReducer";

const reducer = combineReducers({
  bank: bankRreducer,
});

export default reducer;
