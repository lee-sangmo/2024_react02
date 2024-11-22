import React, { useEffect, useRef } from 'react';

function RefTest05(props) {
  const inputRef = useRef();

  // 맨 처음 한번만 실행 될 때 : []
  useEffect(() => {
    inputRef.current.focus();
  },[]);
  
  const login = () => {
    const inputValue = inputRef.current.value;
    alert(`${inputValue}님, 환영합니다`)
    inputRef.current.focus();
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      login();        // Enter 일 때만 login 함수 호출
    }
  }

  return (
    <div>
      <input type='text'
        placeholder='In User Name'
        ref={inputRef}
        onKeyDown={handleKeyDown}   // 키 입력 이벤트
      />
      <button onClick={login}>LOGIN</button>
    </div>
  );
}

export default RefTest05;