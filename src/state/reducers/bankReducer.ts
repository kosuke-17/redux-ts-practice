const initalstate = 0;

// caseによっては型が異なるため、
// type Action = {
//   type: string;
//   payload?: number;
// };
type DepositAction = {
  type: "deposit";
  payload: number;
};
type WithdrawAction = {
  type: "withdraw";
  payload: number;
};
type BankruptAction = {
  type: "bankrupt";
};
// actionにはpayloadが含まれない場合があるため、
type Action = DepositAction | WithdrawAction | BankruptAction;

const reducer = (state: number = initalstate, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state + action.payload;
    case "bankrupt":
      return 0;
    default:
      return state;
  }
};

export default reducer;
