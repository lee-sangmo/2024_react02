import React, { useState } from 'react';

function EffectTest01(props) {
  // 화면 랜더링되지 않는다
  // let count = 5;
  // const setCount = (num) => {
  //   count = num;
  //   console.log(count);
  // }

  // useState를 써야 화면 랜더링이 된다
  const [count, setCount] = useState(5)
  return (
    <div>
      <p>총 {count}번 출력 했습니다</p>
      <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
  );
}

export default EffectTest01;