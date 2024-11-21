import React, { useMemo, useState } from 'react';

// useMemo 는 컴포넌트에서 다시 랜더링 될 때 특정 연산의 재계산을 방지하여 성능을 최적화하기 위해 사용
// useMemo 를 사용하면 불필요한 연산을 피하면서 상태 업데이터를 처리할 수 있음
// 사용용도 : 불필요한 연산을 캐싱(잠시 기억)하고 싶을 때, 참조값 비교로 인해 불필요한 랜더링 방지
// 두개의 인수를 받는데 1st 인수는 캐싱하고 싶은 계산(함수)
//                      2nd 인수는 해당 계산이 다시 실행될 조건(의존성 배열)

function MemoTest01(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("컴포넌트 랜더링");

  // useMemo가 없으면 텍스트 입력 시마다 불필요한 count도 계산하게 된다
  // useMemo를 쓰면 텍스트 입력 시에는 계산을 하지 않아도 된다
  // 필요할 때 필요한 기능만 계산하므로 효율적 랜더링 가능
  const expensiveValue = useMemo(()=>{
    console.log("useMemo 처리");
    return count + 1000;
  },[count]);

  return (
    <div>
      <h2>useMemo exam</h2>
      {/* <p>연산값 : {count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>CLICK</button> */}
      <p>연산값 : {expensiveValue}</p>
      <p>Typing : {text}</p>
      {/* prev 는 이전 상태값을 의미한다 */}
      <button onClick={() => setCount((prev) => prev + 1)}>CLICK</button>
      <input 
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default MemoTest01;