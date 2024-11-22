import React from 'react';

function Header({ isDark }) {
  return (
    <header
      className='header'
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h1>Welcome 홍길동</h1>
    </header>
  );
}

export default Header;