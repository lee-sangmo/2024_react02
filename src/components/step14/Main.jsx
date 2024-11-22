import { ThemeContext } from '@emotion/react';
import React, { useContext } from 'react';
import { UserInfoContext } from '../../context/UserInfoContext';

function Main() {
  const {isDark} = useContext(ThemeContext)
  const user = useContext(UserInfoContext)
  return (
    <div
      className='content'
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
      }}>
        <p>{user}님, 좋은 하루 되세요</p>
    </div>
  );
}

export default Main;