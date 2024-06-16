import React from 'react';

import { GlobeLock } from 'lucide-react';

function Logo() {
  return (
    <a href="/" className="flex">
      <GlobeLock className="stroke sm:w-11 sm:h-11 w-8 h-8 stroke-amber-300 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text sm:text-3xl text-lg font-bold tracking-wide text-transparent ">
        Cryptify
      </p>
    </a>
  );
}

export default Logo;
