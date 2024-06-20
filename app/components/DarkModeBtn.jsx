'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function DarkModeBtn() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <Moon
          className="text-3xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <Sun
          className="text-3xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}
