'use client';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Crypto } from './context';
import { trendingCoins } from '../config/api';
import Link from 'next/link';
import axios from 'axios';
// import Image from 'next/image';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Carousel() {
  const { currency, symbol } = React.useContext(Crypto);
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(trendingCoins(currency));
      setTrending(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let priceChange = coin.price_change_percentage_24h.toFixed(2);
    let isPriceChangePositive = priceChange < 0;

    return (
      <Link
        key={coin.id}
        href={`/cryptocurrencies/${coin.id}`}
        className="flex flex-col gap-y-3 items-center mt-6"
      >
        <img src={coin.image} alt={coin.name} width={80} height={80} />
        <div className="flex flex-row gap-x-2 items-center">
          <h1 className="font-semibold text-xl uppercase">{coin?.symbol}</h1>
          <p className={`${priceChange ? 'text-red-500' : 'text-green-500'}`}>
            {isPriceChangePositive ? '-' : '+'}
            {Math.abs(priceChange)}%
          </p>
        </div>
        <div className="text-lg flex flex-row items-center gap-1">
          <div>{symbol}</div>
          <div className="tracking-wider">
            {coin?.current_price.toLocaleString()}
          </div>
        </div>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    2048: {
      items: 6,
    },
    4098: {
      items: 8,
    },
  };

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousel;
