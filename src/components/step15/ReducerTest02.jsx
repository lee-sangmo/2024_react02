import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "inCash":
      return state + action.payload;
    case "outCash":
      return state - action.payload;
    default:
      return state;
  }
}

function ReducerTest02(props) {
  const [number, setNumber] = useState(0)               // input 금액 관리
  const [money, dispatch] = useReducer(reducer, 1000)   // 잔고 관리
  return (
    <div>
      <h2>Star Bank에 오신 것을 환영합니다</h2>
      <p>잔고 : {money}원</p>
      <input type='number'
        value={number}
        onChange={(e) => {
          const value = parseInt(e.target.value) || 0;
          setNumber(value < 0 ? 0 : value);               // 음수 방지
        }}
        step="1000"
      />
      <button onClick={() => {
        dispatch({ type: "inCash", payload: number });
        setNumber(0);
      }}>예금</button>
      <button onClick={() => {
        if (number > money) {
          alert("잔고가 부족합니다")
        } else {
          dispatch({ type: "outCash", payload: number });
          setNumber(0);
        }
      }}>출금</button>
    </div>
  );
}

export default ReducerTest02;