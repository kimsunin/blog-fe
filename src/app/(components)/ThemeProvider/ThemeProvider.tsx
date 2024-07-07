'use client';
import {useState, useEffect} from "react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

 
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }
    
  return (
    <NextThemesProvider attribute='class' defaultTheme='light' {...props}>
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider