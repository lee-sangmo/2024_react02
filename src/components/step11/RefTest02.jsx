import React, { useRef, useState } from 'react';

function RefTest02(props) {
  const [render, setRender] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const refUp = () => {
    countRef.current = countRef.current + 1;
    console.log("countRef : ", countRef.current);
  }
  const varUp = () => {
    countVar = countVar + 1;
    console.log("countVar : ", countVar);
  }

  const doRender = () => {
    setRender(render + 1);
  }
  const printResult = () => {
    console.log(`countRef: ${countRef.current}, countVar: ${countVar}`);
  }
  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      {/* 둘다 랜더링이 안된다 */}
      <button onClick={refUp}>Ref Up</button>
      <button onClick={varUp}>Var Up</button>

      {/* 그래서 랜더링 버튼을 만들어 실행하면 ref는 값을 가지고 있으나, var는 랜더링 시 초기화 된다 */}
      <button onClick={doRender}>Rendering</button>
      <button onClick={printResult}>Print Result</button>


    </div>
  );
}

export default RefTest02;