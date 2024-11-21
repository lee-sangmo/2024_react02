import React, { useEffect, useState } from 'react';

function EffectTest03(props) {
  const [count, setCount] = useState(0);  // useEffect 관리o
  const [count2, setCount2] = useState(0);// useEffect 관리x
  const [text, setText] = useState("");   // 입력값 관리

  console.log("컴포넌트 랜더링 발생")

  useEffect(() => {
    console.log("useEffect 실행됨")
  },[count]);
  return (
    <div>
      <h1>useState vs. useEffect</h1>
      <p>Count (useEffect) 관리 : {count}</p>
      <button onClick={() => setCount(count + 1)}>CLICK</button>
      <br />
      <p>Count (useEffect) 관리 안함 : {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>CLICK</button>
      <br />
      
      <p>텍스트 입력: {text}</p>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default EffectTest03;