import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>入金</button>
      <button onClick={() => withdrawMoney(100)}>引き出し</button>
      <button onClick={() => bankrupt()}>破産</button>
    </div>
  );
}

export default App;
