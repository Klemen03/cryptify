'use client';
import React from 'react';
import HistoricalChart from '@/app/components/HistoricalChart';
import SingleCoinInfo from '@/app/components/SingleCoinInfo';
import { Button } from '@/components/ui/button';

function CryptocurrencyPage({ params }) {
  const coinParams = params;

  return (
    <div className="flex flex-col lg:flex-row">
      <SingleCoinInfo params={coinParams} />
      <HistoricalChart params={coinParams} />
      <Button
        className="rounded-full self-end mt-16 mr-3 mb-1 w-52 bg-green-500 text-white font-semibold tracking-wider 
      hover:border-2 hover:border-green-300
      hover:bg-green-700 active:bg-green-400 active:border-2 active:border-green-700"
      >
        ADD TO WATCHLIST
      </Button>
    </div>
  );
}

export default CryptocurrencyPage;
