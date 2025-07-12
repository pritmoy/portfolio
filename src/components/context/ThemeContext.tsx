"use client";

import { createContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'dark';
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark'); 
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};
