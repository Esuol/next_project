'use client';

import { ThemeProvider } from 'next-themes';

// @ts-ignore
export function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
