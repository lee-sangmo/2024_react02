import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function Header() {
  const {isDark} = useContext(ThemeContext)
  const user = useContext(UserInfoContext)
  return (
    <header
      className='header'
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h1>Welcome {user}</h1>
    </header>
  );
}

export default Header;