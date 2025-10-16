import React, { createContext, useEffect, useState } from 'react';
import type { DetailsProps } from '@/types/cv';
import Data from '@/assets/data.json';
import Layout from '@/components/Layout';
import { DEFAULT_THEME, THEME_SESSION_NAME } from './constant/themes';

interface AppContextProps {
  data: DetailsProps | undefined | null;
  showThemeController: boolean;
  setShowThemeController: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>(null);

function App() {

  const data: DetailsProps = Data;

  const [showThemeController, setShowThemeController] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem(THEME_SESSION_NAME) || DEFAULT_THEME);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_SESSION_NAME, theme);
  }, [theme]);

  const appContextData: AppContextProps = {
    data,
    showThemeController,
    setShowThemeController,
    theme,
    setTheme
  }

  return <>
    <AppContext.Provider value={appContextData}>
      <div className='bg-base-300 min-h-screen'>{data && <Layout />}</div>
    </AppContext.Provider>
  </>
}

export default App
