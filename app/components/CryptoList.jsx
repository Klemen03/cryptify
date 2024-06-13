'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Crypto } from './context';
import { coinList } from '../config/api';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

function CryptoList() {
  const { currency, symbol } = useContext(Crypto);
  const [loading, setLoading] = useState(false);
  const [coinTable, setCoinTable] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(coinList(currency));
      setLoading(false);
      setCoinTable(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  console.log(search);

  return (
    <div className="flex flex-col pt-7 items-center dark:bg-gray-900">
      <h1 className="text-4xl text-amber-600   dark:text-yellow-300 font-medium tracking-wide">
        Cryptocurrencies by Market Cap
      </h1>
      <input
        placeholder="Search For a Crypto Currency..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="px-5 py-4 my-7 max-w-5xl w-full mx-auto outline-none border-2 dark:border-gray-500 dark:focus:border-amber-400 rounded-full dark:placeholder:focus:text-orange-200 focus:shadow-md dark:focus:shadow-orange-700 placeholder:tracking-wider transition-shadow-color duration-300 border-gray-200 focus:border-gray-800 focus:placeholder:text-gray-800 focus:shadow-gray-400"
      />
      <Table className="max-w-7xl mx-auto text-xl">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>24h Change</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coinTable.map((coin) => (
            <TableRow key={coin.id}>
              <Link id={coin.id} href={`/cryptocurrencies/${coin.id}`}>
                <TableCell className="font-medium">
                  <div className="flex">
                    <img
                      className="w-[50px] h-[50px]"
                      src={coin.image}
                      alt={coin.name}
                    />
                    <div className="flex flex-col pl-3 mr-14">
                      <h1 className="uppercase tracking-wider">
                        {coin.symbol}
                      </h1>
                      <p className="text-sm">{coin.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {symbol}
                  {coin.current_price.toLocaleString()}
                </TableCell>
                <TableCell>
                  {coin.price_change_percentage_24h < 0 ? '-' : '+'}
                  {Math.abs(coin.price_change_percentage_24h).toFixed(2)}
                  {'%'}
                </TableCell>
                <TableCell className="text-right">
                  {coin.market_cap.toLocaleString()}
                  {'M'}
                </TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}

export default CryptoList;
