import React, { useRef, useState } from 'react';

// useRef
// 1. 값의 유지: 값의 변화를 추적하지만 값이 변경되더라도 랜더링이 되지 않는다
//               불필요한 랜더링 방지
// 2. DOM(Document Object Model) 요소 참조 : focus()
function RefTest01(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(5);

  // Ref의 값을 호출할 때는 current(현재값 기억)
  console.log("count : " + count, "countRef : " + countRef.current);
  const statePlus = () => {
    return setCount(count + 1);
  }
  const refPlus = () => {
    countRef.current = countRef.current + 1;
    console.log("count 안: ", count, "countRef 안 : ", countRef.current);
  }
  return (
    <div>
      <p>State : {count}</p>
      <p>Ref: {countRef.current}</p>
      {/* <button onClick={()=> setCount(count + 1)}>State Up</button> */}
      <button onClick={statePlus}>State Up</button>

      {/* useRef는 랜더링을 하지 않아서 화면 숫자는 그대로 */}
      <button onClick={refPlus}>Ref Up</button>
    </div>
  );
}

export default RefTest01;