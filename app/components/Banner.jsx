import React from 'react';

import Carousel from './Carousel';

const Banner = () => {
  return (
    <>
      <div className="h-96 flex flex-col mx-auto pt-5 ">
        <div className="flex flex-col text-center h-2/5 justify-center">
          <h1 className="text-6xl font-bold tracking-wider pb-5">Cryptify</h1>
          <h2 className="text-xl">
            Get All The Info Regarding Your Favorite Crypto Currency
          </h2>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Banner;
