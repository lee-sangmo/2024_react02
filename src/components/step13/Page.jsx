import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function Page({ isDark, setIsDark }) {
  return (
    <div className='page'>
      <Header isDark={isDark} />
      <Main isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Page;