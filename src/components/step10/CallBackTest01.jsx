import React, { useCallback, useState } from 'react';
import Light from './Light';

// useCallBack은 useMemo와 같이 메모리제이션을 한다
// 차이점은 useMemo는 값을 저장
//          useCallBack은 함수를 저장
// useCallBack은 불필요한 함수를 다시 생성하는 것을 방지하는 역할
// 특히 자식 컴포넌트에 props로 함수를 전달할 때, 또는 함수가 의존성 배열에 포함될 때 유용하다

function CallBackTest01(props) {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  // 하나만 실행해도 3개의 함수가 모두 실행된다
  // const toggleMaster = () => setMasterOn(!masterOn);
  // const toggleKitchen = () => setKitchenOn(!kitchenOn);
  // const toggleBath = () => setBathOn(!bathOn);
  
  // useCallBack를 쓰면 실행하는 함수만 실행되고, 나머지는 실행되지 않는다
  const toggleMaster = useCallback(() => setMasterOn(!masterOn),[masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn),[kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn),[bathOn]);

  console.log("랜더링");
  return (
    <div>
      {/* Light 는 자식 컴포넌트 */}
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  );
}

export default CallBackTest01;