import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CryptoList from './components/CryptoList';

function page() {
  return (
    <>
      <Header />
      <Banner />
      <CryptoList />
    </>
  );
}

export default page;
