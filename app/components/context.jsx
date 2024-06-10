'use client';
import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from 'react';

export const Crypto = createContext();

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'INR') setSymbol('₹');
    else if (currency === 'EUR') setSymbol('€');
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;
