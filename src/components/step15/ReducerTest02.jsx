import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "input":
      return state + action.payload;
    case "output":
      return state >= action.payload ? state - action.payload : alert("잔고가 부족합니다");
    default:
      return state;
  }
}

function ReducerTest02(props) {
  const [number, setNumber] = useState(0)           // 입력 금액 관리
  const [money, dispatch] = useReducer(reducer, 1000)  // 잔고 관리
  return (
    <div>
      <h2>Star Bank에 오신 것을 환영합니다</h2>
      <p>잔고 : {money}원</p>
      <input type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button onClick={() => dispatch({type: "input", payload: Number(number) })}>예금</button>
      <button onClick={() => dispatch({type: "output", payload: Number(number) })}>출금</button>
    </div>
  );
}

export default ReducerTest02;