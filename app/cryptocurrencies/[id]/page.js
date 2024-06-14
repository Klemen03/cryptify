'use client';
import React, { useContext, useState, useEffect } from 'react';
import { singleCoin } from '@/app/config/api';
import { Crypto } from '@/app/components/context';
import axios from 'axios';

import { Button } from '@/components/ui/button';

function CryptocurrenciesPage({ params }) {
  const coinId = params.id;

  const { currency, symbol } = useContext(Crypto);
  const [coin, setCoin] = useState({});

  const fetchSingleCoin = async () => {
    try {
      const { data } = await axios.get(singleCoin(coinId));
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(coin);

  useEffect(() => {
    fetchSingleCoin();
  }, [currency]);

  function removeHtmlTags(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  const loweredCurrency = currency.toLowerCase();

  const coinDescription = removeHtmlTags(coin.description?.en);

  const slicedCoinDescription = coinDescription?.split('.');

  console.log(slicedCoinDescription);
  console.log(coinDescription);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/3 m-7 pr-10 pb-10 lg:border-r-2 border-gray-500 items-center">
        <img src={coin.image?.large} />
        <h1 className="text-5xl py-6">{coin.name}</h1>
        <p>{slicedCoinDescription?.slice(0, 2)}.</p>
        <p className="py-6">Rank: {coin.market_cap_rank}</p>
        <p>
          Current Price: {symbol}
          {coin.market_data?.current_price[loweredCurrency]}
        </p>
        <p className="my-6">
          Market Cap: {symbol}
          {coin.market_data?.market_cap[loweredCurrency].toLocaleString()}M
        </p>
        <Button>ADD TO WATCHLIST</Button>
      </div>
      <div>CHART</div>
    </div>
  );
}

export default CryptocurrenciesPage;
