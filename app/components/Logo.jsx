import React from 'react';

import { GlobeLock } from 'lucide-react';

function Logo() {
  return (
    <a href="/" className="flex text-2xl font-extrabold">
      <GlobeLock className="stroke w-11 h-11  stroke-amber-300 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold tracking-wide text-transparent">
        Cryptify
      </p>
    </a>
  );
}

export default Logo;
