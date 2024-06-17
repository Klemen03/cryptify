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
        className="rounded-full self-end mt-16 mr-3 mb-1 w-52 bg-green-700 text-white font-semibold tracking-wider 
      hover:border-2 hover:border-green-400
      hover:bg-green-900 active:bg-green-500 active:border-2 active:border-green-100"
      >
        ADD TO WATCHLIST
      </Button>
    </div>
  );
}

export default CryptocurrencyPage;
