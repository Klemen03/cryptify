'use client';
import React, { useContext, useState, useEffect } from 'react';
import { singleCoin } from '@/app/config/api';
import { Crypto } from '@/app/components/context';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const SingleCoinInfo = ({ params }) => {
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

  return (
    <div className="flex flex-col text-lg lg:w-1/4 items-center w-full mt-6 p-6 lg:border-r-2 lg:border-gray-600">
      <img src={coin.image?.large} className="sm:w-[200px] w-[150px]" />
      <h1 className="text-3xl pb-10 font-semibold tracking-wider">
        {coin.name}
      </h1>

      <p>{slicedCoinDescription?.slice(0, 2)}.</p>
      <div className="flex flex-col gap-5 self-start pt-6 tracking-wider">
        <p>
          <strong className="text-yellow-700">Rank:</strong>{' '}
          {coin.market_cap_rank}
        </p>
        <p>
          <strong className="text-yellow-700">Current Price:</strong> {symbol}
          {coin.market_data?.current_price[loweredCurrency]}
        </p>
        <p className="">
          <strong className="text-yellow-700">Market Cap:</strong> {symbol}
          {coin.market_data?.market_cap[loweredCurrency].toLocaleString()}M
        </p>
      </div>
    </div>
  );
};

export default SingleCoinInfo;
