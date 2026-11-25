'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos los 3 temas
export type Theme = 'dark' | 'light' | 'third'; 

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Permite elegir uno específico
  toggleTheme: () => void; // (Lo mantenemos por si acaso, pero usaremos setTheme)
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  return context;
}