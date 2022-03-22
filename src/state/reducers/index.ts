import { combineReducers } from "redux";
import bankRreducer from "./bankReducer";

const reducers = combineReducers({
  bank: bankRreducer,
});

export default reducers;

// useSelectorの引数のstateの型を指定するために
export type State = ReturnType<typeof reducers>;
