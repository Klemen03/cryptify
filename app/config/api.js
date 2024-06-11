export const coinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false?x-cg-demo-api-key=${process.env.API_KEY}`;

export const singleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?x-cg-demo-api-key=${process.env.API_KEY}`;

export const historicalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}?x-cg-demo-api-key=${process.env.API_KEY}`;

export const trendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h?x-cg-demo-api-key=${process.env.API_KEY}`;
