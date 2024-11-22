import React from 'react';

function Footer({ isDark, setIsDark }) {
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <footer
      className='footer'
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
      }}
    >
      <button className='button' onClick={toggleTheme}>Change Mode</button>
    </footer>
  );
}

export default Footer;