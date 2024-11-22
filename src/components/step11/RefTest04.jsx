import React, { useEffect, useRef, useState } from 'react';

function RefTest04(props) {
  const [count, setCount] = useState(0);
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);
  const randCount = useRef(0);

  useEffect(() => {
    console.log('랜더링 수 : ', randCount.current);
    randCount.current = randCount.current + 1;
  }, [count]);

  const btn1Click = () => {
    setBtn1(btn1 + 1);
    setCount(count + 4);
  }
  const btn2Click = () => {
    setBtn2(btn2 + 1);
    setCount(count + 3);
  }

  return (
    <div>
      <p>Total : {count}</p>
      <p>btn1 click cnt : {btn1}</p>
      <p>btn2 click cnt : {btn2}</p>
      <p>Total click cnt : {randCount.current}</p>
      <button onClick={btn1Click}>btn1 Up(+4)</button>
      <button onClick={btn2Click}>btn2 Up(+3)</button>
    </div>
  );
}

export default RefTest04;