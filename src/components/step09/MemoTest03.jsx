import React, { useMemo, useState } from 'react';

const hardCalcu = (num) => {
  console.log("hardCalcu");
  for (let i = 0; i < 1999999999; i++) {}
  return num + 10000;
}
const easyCalcu = (num) => {
  console.log("easyCalcu");
  return num + 10000;
}

// easy를 해도 역시나 느리다, 왜냐하면 hard도 같이 실행하기 때문이다. 
// 따라서 useMemo로 hard를 따로 돌려 최적화 한다!!
function MemoTest03(props) {
  console.log("컴포넌트")
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // hardNumber 값이 변경 될 때만 실행 (랜더링 됨)
  const hardSum = useMemo(() => {
    return hardCalcu(hardNumber);
  },[hardNumber]);
  const easySum = easyCalcu(easyNumber)

  return (
    <div>
      <h3>Hard 계산기</h3>
      <input
        type='number'
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+ 100000 = {hardSum} </span>
      <hr />

      <h3>Easy 계산기</h3>
      <input
        type='number'
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+ 100000 = {easySum} </span>
    </div>
  );
}

export default MemoTest03;