import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function Page() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Page;