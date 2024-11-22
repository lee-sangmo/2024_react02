import React, { useEffect, useId, useReducer, useRef } from 'react';

// useId란 고유한 ID를 생성한다
// useId는 어떤 매개변수도 받지 않는다
// 반복문이나 조건문에서는 사용할 수 없다
// 필요한 경우 새로운 컴포넌트를 추출하고 해당 컴포넌트로 state를 이동해서 사용
// useId를 리스트의 key를 생성하기 위해 사용하면 안된다. Key는 데이터로부터 생성해야 한다
function UseIdTest(props) {
  const id = useId();
  const nameRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    // 가져올 수 없다 (useRef 사용해야 한다)
    // const element = document.querySelector(id);
    // console.log(element);

    const nameElement = nameRef.current;
    const ageElement = ageRef.current;
    console.log("nameElement:", nameElement);
    console.log("ageElement:", ageElement);
  }, [])

  const login = () => {
    const inputValue = nameRef.current.value;
    alert(`${inputValue}님, 환영합니다`)
    nameRef.current.focus();
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      login();
    }
  }

  return (
    <div>
      {/* <label htmlFor={id}>Name : </label>
      <input id={id} ref={nameRef} /><br /> */}

      {/* 만약 여러개일 경우 */}
      {/* <label htmlFor={age}>Age : </label>
      <input id={age} ref={ageRef} /> */}

      <label htmlFor={`${id}-name`}>Name : </label>
      <input id={`${id}-name`} 
        ref={nameRef} 
        placeholder='In User Name'
        onKeyDown={handleKeyDown}
      />
      <button onClick={login}>입력</button><br />
      
      <label htmlFor={`${id}-age`}>Age : </label>
      <input id={`${id}-age`} 
        ref={ageRef} 
        placeholder='In User Age'
        onKeyDown={handleKeyDown}
      />
      <button>입력</button><br />

    </div>
  );
}

export default UseIdTest;