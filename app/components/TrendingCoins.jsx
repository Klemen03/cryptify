'use client';

import axios from 'axios';

import React, { useEffect, useState } from 'react';

function TrendingCoins() {
  const [trending, setTrending] = useState('');

  //   const fetchTrendingCoins = async () => {
  //     const response = await axios.get(
  //       'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
  //       {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': '63740950-84b5-4b2f-8f25-07e183f1105d',
  //     },
  //   }
  //     );
  //     setTrending(response);
  //   };

  //   console.log(trending);

  //   useEffect(() => {
  //     fetchTrendingCoins();
  //   }, []);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // });

  return <div>TrendingCoins</div>;
}

export default TrendingCoins;

// response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//         'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
//       },
//     });
