import React, { useEffect, useState } from 'react';

// useEffect 는 리액트에서 제공하는 hook 중 하나로
// 함수형 컴포넌트에서 사이드 이펙트를 처리 할 수 있도록 도와준다
// 사이드 이펙트란 컴포넌트에 랜더링 외에 작업(데이터 가져오기, DOM 수정 등)을 의미한다
// useEffect 는 상태변경으로 인해 발생한 랜더링(useState) 이후에 실행된다
// 의존성 배열을 통해 특정 상태나 속성 변화에만 반응하도록 제한
// 의존성 배열이 없으면 처음 갱신될 때 마다 호출
// 의존성 배열이 [] 비어있으면 처음 한번만 실행하고 다시 호출 안함
// 형식)
// useEffect(() => {
//   랜더링 이후 실행할 작업
//  [ return() => {               <- return 화살표 함수는 생략가능
//      정리작업(clean-up)
//   } ]
// },[의존성 배열1, 의존성 배열2...]);

function EffectTest02(props) {
  const [count, setCount] = useState(5)
  // 최초 1회만 호출
  // useEffect(() => {
  //   document.title = `총 ${count}번 클릭 했습니다`
  // },[]);

  useEffect(() => {
    document.title = `총 ${count}번 클릭 했습니다`
  },[count]);
  return (
    <div>
      <p>총 {count}번 출력 했습니다</p>
      <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
  );
}

export default EffectTest02;