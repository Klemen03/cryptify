'use client';
import React from 'react';
import HistoricalChart from '@/app/components/HistoricalChart';
import SingleCoinInfo from '@/app/components/SingleCoinInfo';

function CryptocurrencyPage({ params }) {
  const coinParams = params;

  return (
    <div className="flex flex-col lg:flex-row">
      <SingleCoinInfo params={coinParams} />
      <HistoricalChart />
    </div>
  );
}

export default CryptocurrencyPage;
