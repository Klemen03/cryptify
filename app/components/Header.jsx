'use client';
import React from 'react';
import Logo from './Logo';
import { DarkModeBtn } from './DarkModeBtn';
import { CurrencyComboBox } from './CurrencyComboBox';
import { User } from 'lucide-react';

function Header() {
  return (
    <div className="flex justify-between p-6 items-center bg-white dark:bg-gray-900">
      <Logo />
      <div className="flex items-center gap-4">
        <CurrencyComboBox />
        <DarkModeBtn />
        <User />
      </div>
    </div>
  );
}

export default Header;
