import React from 'react';

function Light({room, on, toggle}) {
  console.log({room, on});

  return (
    <div>
      <button onClick={toggle}>
        {room} {on ? "💡" : "⬛"}
      </button>
    </div>
  );
}

// useCallBack을 쓸 때는 React.memo(); 를 쓴다!!
export default React.memo(Light);