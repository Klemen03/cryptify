'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import TrendingCoins from './TrendingCoins';
import { Crypto } from './context';

function Carousel() {
  const { currency } = React.useContext(Crypto);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const FetchTrendingCoins = async () => {
      const { data } = await axios.get(TrendingCoins(currency));

      setTrending(data);
    };

    FetchTrendingCoins();
  }, [currency]);

  const items = [];

  console.log(trending);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
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
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousel;
