import React, { useMemo, useState } from 'react';

function MemoTest02_1(props) {
  console.log("컴포넌트")
  const [query, setQuery] = useState("");
  const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

  // includes() 함수는 특정값을 포함하고 있으면 true를 반환
  // query 가 변경되면 랜더링 된다 (변경 안되면 랜더링 안된다!!)
  const filterItem = useMemo(() => {
    console.log("useMemo 안")
    return items.filter((k) => k.toLowerCase().includes(query.toLowerCase()))
  },[query]);
  return (
    <div>
      <h3>Memo 사용 예제</h3>
      <input 
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filterItem.map((k, index) => (
          <li key={index}>{k}</li>
        ))}
      </ul>
    </div>
  );
}

export default MemoTest02_1;