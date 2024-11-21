import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
  const [number, setNumber] = useState(0);

  // useEffect에서 input에서 증감 클릭할 때마다 리랜더링되면서
  // someFunction 의 객체(함수)가 새로 생성되면 변경된 것을 감지한다
  // const someFunction = () => {
  //   console.log(`someFunction : number : ${number}`);
  //   return;
  // }

  // useCallback 은 함수 전체를 저장한다 (함수 자체의 useCallback 초기 저장된 number는 0 이므로 이를 출력한다)
  const someFunction = useCallback(() => {
    console.log(`someFunction : number : ${number}`);
    return;
  },[number]);

  useEffect(() => {
    console.log("someFuction 변경", number)
  },[someFunction]);              // someFunction 함수가 변경됬음을 감지하고 console에 찍어준다
  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)} />
        <br />
        <button onClick={someFunction}>someFunction 함수 호출</button>
    </div>
  );
}

export default CallBackTest02;