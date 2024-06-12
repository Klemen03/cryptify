'use client';
import React, { useContext, useState, useEffect } from 'react';
import { singleCoin } from '@/app/config/api';
import { Crypto } from '@/app/components/context';
import axios from 'axios';
import { symbol } from 'zod';
import { Button } from '@/components/ui/button';

function CryptocurrenciesPage() {
  const { currency, symbol } = useContext(Crypto);
  const [coin, setCoin] = useState({});

  let id = 'bitcoin';

  const fetchSingleCoin = async () => {
    const { data } = await axios.get(singleCoin(id));

    setCoin(data);
  };

  console.log(coin);
  useEffect(() => {
    fetchSingleCoin();
  }, [currency]);

  const loweredCurrency = currency.toLowerCase();

  const coinDescription = coin.description?.en;
  const slicedCoinDescription = coinDescription?.split('.');

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/3 m-7 pr-10 pb-10 lg:border-r-2 border-gray-500 items-center">
        <img src={coin.image?.large} />
        <h1 className="text-5xl py-6">{coin.name}</h1>
        <p>{slicedCoinDescription?.slice(0, 1)}.</p>
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
