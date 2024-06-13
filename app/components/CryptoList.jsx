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

  const searchedCoins = coinTable.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
  );

  // const handleSearch = () => {
  //   return coinTable.filter(
  //     (coin) =>
  //       coin.name.toLowerCase().includes(search) ||
  //       coin.symbol.toLowerCase().includes(search)
  //   );
  // };

  // console.log(searchedCoins);

  return (
    <div className="flex flex-col min-h-screen pt-7 items-center dark:bg-gray-900">
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
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="flex flex-row items-center justify-between dark:hover:bg-gray-900 hover:bg-white">
            <TableHead className="w-[100px] ml-16">Coin</TableHead>
            <div className="flex flex-row items-center gap-x-14">
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
            </div>
          </TableRow>
        </TableHeader>
        <TableBody>
          {searchedCoins.map((coin) => (
            <TableRow key={coin.id}>
              <Link
                id={coin.id}
                href={`/cryptocurrencies/${coin.id}`}
                className="flex flex-row items-center justify-between p-3"
              >
                <TableCell className="font-medium flex">
                  <img
                    className="w-[50px] h-[50px]"
                    src={coin.image}
                    alt={coin.name}
                  />
                  <div className="flex flex-col pl-3 ">
                    <h1 className="uppercase tracking-wider">{coin.symbol}</h1>
                    <p className="text-sm">{coin.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <TableCell>
                    {symbol}
                    {coin.current_price.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {coin.price_change_percentage_24h < 0 ? '-' : '+'}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}
                    {'%'}
                  </TableCell>
                  <TableCell>
                    {coin.market_cap.toLocaleString()}
                    {'M'}
                  </TableCell>
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

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ]

// export function TableDemo() {
//   return (
//     <Table>
//       <TableCaption>A list of your recent invoices.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Invoice</TableHead>
//           <TableHead>Status</TableHead>
//           <TableHead>Method</TableHead>
//           <TableHead className="text-right">Amount</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {invoices.map((invoice) => (
//           <TableRow key={invoice.invoice}>
//             <TableCell className="font-medium">{invoice.invoice}</TableCell>
//             <TableCell>{invoice.paymentStatus}</TableCell>
//             <TableCell>{invoice.paymentMethod}</TableCell>
//             <TableCell className="text-right">{invoice.totalAmount}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={3}>Total</TableCell>
//           <TableCell className="text-right">$2,500.00</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   )
// }
