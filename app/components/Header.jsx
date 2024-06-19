'use client';
import React from 'react';
import Logo from './Logo';
import { DarkModeBtn } from './DarkModeBtn';
import { CurrencyComboBox } from './CurrencyComboBox';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className="flex justify-between p-6 items-center bg-white dark:bg-gray-900 border-b-2 border-gray-600">
      <Logo />
      <div className="flex items-center gap-4">
        <CurrencyComboBox />
        <DarkModeBtn />
        <SignedOut>
          <SignInButton className="bg-amber-400 py-2 px-3 text-sm rounded-full hover:bg-amber-500" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
