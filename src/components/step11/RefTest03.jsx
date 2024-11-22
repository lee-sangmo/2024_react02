import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const randCount = useRef(0);
  
  // 방법1.
  // console.log('랜더링 수 : ', randCount.current);
  // randCount.current = randCount.current + 1;

  // 방법2. 의존성배열이 없는 경우 랜더링 할 때마다 useEffect가 카운팅 된다
  //        그러나 의존성배열을 주면 원하는 대상을 골라서 useEffect를 카운팅 시킬 수 있다!!
  useEffect(()=>{
    console.log('랜더링 수 : ', randCount.current);
    randCount.current = randCount.current + 1;
  });

  return (
    <div>
      <p>State : {count + count2}</p>
      <button onClick={() => setCount(count + 4)}>State Up</button>
      <button onClick={() => setCount2(count2 + 3)}>State Up</button>
    </div>
  );
}

export default RefTest03;