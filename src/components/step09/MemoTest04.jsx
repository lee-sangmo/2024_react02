import React, { useEffect, useMemo, useState } from 'react';

function MemoTest04(props) {
  console.log("컴퍼넌트 호출");
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // input을 누르면 location 아니므로 useEffect 내용출력 안됨
  // 기본 자료형에는 값이 저장된다
  // const location = isKorea ? '한국' : '외국';
  // useEffect(() => {
  //   console.log("useEffect 호출");
  // }, [location]);

  // 객체: 랜더링 되면서 객체가 생성되고 생성된 객체의 주소가 변경되어 저장된다.
  // const location = {
  //   country : isKorea ? '한국' : '외국'
  // };

  // 3. Memo을 이용하자
  const location = useMemo(() => {
    return {
      country : isKorea ? '한국' : '외국'
    };
  },[isKorea]);

  useEffect(() => {
    console.log("useEffect 호출")
  },[location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라 사람인가요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default MemoTest04;