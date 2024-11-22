import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react';

// useReducer는 React의 상태관리 Hook, 복잡한 상태 변화를 더 명확하고 예측 가능하게 관리할 수 있도록 도와준다
// 상태관리 로직을 컴포넌트에서 분리하여 코드 가독성을 높인다
// Dispatcher(Action) --> Reducer(state, Action) --> state Update
//  요구(요구내용)         업데이트(상태, 내용)      내용에 따른 상태 변경
// action -> 요구의 내용, type과 payload가 있다

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "sub":
      return state - action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
}

function ReducerTest01(props) {
  //                         useReducer(위에 함수명 reducer, state 초기값)
  const [number, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p> Count : {number} </p>
      {/* 구분하기 위해서 type 존재한다. 요청에 포함되는 데이터, 정보를 의미 */}
      <button onClick={() => dispatch({ type: "add", payload: 1 })}> + </button>
      <button onClick={() => dispatch({ type: "sub", payload: 1 })}> - </button>
      <button onClick={() => dispatch({ type: "reset" })}> RESET </button>
    </div>
  );
}

export default ReducerTest01;