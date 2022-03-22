import { ActionType } from "../action-types";
// caseによっては型が異なるため、
// type Action = {
//   type: string;
//   payload?: number;
// };

type DepositAction = {
  type: ActionType.DEPOSIT;
  payload: number;
};
type WithdrawAction = {
  type: ActionType.WITHDRAW;
  payload: number;
};
type BankruptAction = {
  type: ActionType.BANKRUPT;
};
// actionにはpayloadが含まれない場合があるため、
export type Action = DepositAction | WithdrawAction | BankruptAction;
