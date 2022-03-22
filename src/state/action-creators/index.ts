import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

// メソッドを作成する

export const depositMoney = (amount: number) => {
  // Dispathの方はジェネリック型のため、Action型のスコープを設定
  // そうすることで、payloadはnumber型という指定がなされる
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};
export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
