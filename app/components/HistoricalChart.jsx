import React, { useContext, useEffect, useState } from 'react';
import { Crypto } from './context';
import axios from 'axios';
import { historicalChart } from '../config/api';
import { Button } from '@/components/ui/button';

import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const HistoricalChart = ({ params }) => {
  const coinId = params.id;
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState('1');
  const { currency, symbol } = useContext(Crypto);

  const filterDays = [
    { daysCount: '1' },
    { daysCount: '30' },
    { daysCount: '180' },
    { daysCount: '365' },
  ];

  const fetchHistoricalData = async () => {
    try {
      const { data } = await axios.get(historicalChart(coinId, days, currency));
      setHistoricalData(data.prices);
    } catch (e) {
      console.error(e);
    }
  };

  // const dataDate = historicalData?.map((coin) => {
  //   let date = new Date(coin[0]);
  //   let time =
  //     date.getHours() > 12
  //       ? `${date.getHours() - 12}:${date.getMinutes()} PM`
  //       : `${date.getHours()}:${date.getMinutes()} AM`;

  //   return days === 1 ? time : date.toLocaleDateString();
  // });

  // const datasets = historicalData?.map((coin) => coin[1]);

  // console.log('chartData', dataDate);
  // console.log('datasets', datasets);

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  // console.log('data', historicalData);

  const labels = historicalData?.map((coin) => {
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;

    return days === 1 ? time : date.toLocaleDateString();
  });

  const dataSets = historicalData?.map((coin) => coin[1]);

  const handleDays = (number) => {
    setDays(number);
    console.log(number);
  };

  return (
    <div className="w-3/4">
      <div>
        {!historicalData ? (
          <p>Loading</p>
        ) : (
          <>
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: `${coinId} price for past ${days} ${
                      days === '1' ? 'day' : 'days'
                    } in the ${currency}`,
                    data: dataSets,
                    borderColor: 'rgb(252, 211, 77)',
                  },
                ],
              }}
              options={{
                elements: { point: { radius: 1 } },
              }}
            />
          </>
        )}
      </div>
      <div className="flex gap-10 mt-5 ml-5">
        {filterDays.map((day) => (
          <Button
            onClick={() => handleDays(day.daysCount)}
            className={`w-24 text-black text-md rounded-full bg-gray-100 hover:bg-amber-500 active:bg-amber-600 active:border-2 active:border-blac dark:bg-gray-600 dark:text-white dark:hover:bg-amber-600 ${
              day.daysCount === days
                ? 'bg-amber-500 border-2 border-black dark:bg-amber-600 dark:border-white'
                : ''
            }`}
            key={day.daysCount}
          >
            {day.daysCount}
            {day.daysCount === '1' ? ' day' : ' days'}
          </Button>
        ))}
      </div>

      {/* <div className="">
        <Button onClick={() => handleDays()} className="rounded-full">
          30 Days
        </Button>
        <Button onClick={() => setDays()} className="rounded-full">
          90 Days
        </Button>
        <Button className="rounded-full">120 Days</Button>
        <Button className="rounded-full">360 days</Button>
      </div> */}
    </div>
  );
};

export default HistoricalChart;