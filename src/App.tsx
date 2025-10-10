import React, { createContext, useEffect, useState } from 'react';
import './App.css'
import type { DetailsProps } from './details/types';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Experiences from './components/Experience';
import Links from './components/Links';
import Skills from './components/Skills';
import ThemeDrawer from './components/ThemeDrawer';
import Data from './assets/data.json';
import Footer from './components/Footer';
import About from './components/About';

interface AppContextProps {
  data: DetailsProps;
  showThemeController: boolean;
  setShowThemeController: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>(undefined);

function App() {

  const data: DetailsProps = Data || null;
  const [showThemeController, setShowThemeController] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return <>
    <AppContext.Provider value={{
      data,
      showThemeController,
      setShowThemeController,
      theme,
      setTheme
    }}>
      <div className='bg-base-300 min-h-screen'>
        {data && <>
          <ThemeDrawer />
          <div className="max-w-6xl mx-auto grid md:grid-cols-[30%_1fr] lg:grid-cols-[25%_1fr] gap-3 py-3 px-2 text-base-content">
            <div className="w-full flex items-start flex-col justify-start gap-3">
              <Profile />
              <Contact phone_numbers={data?.phone_numbers || []} emails={data?.emails || []} />
              <Links links={data?.links || []} />
            </div>
            <div className="flex items-start flex-col justify-start gap-3">
              <About />
              <Skills skills={data?.technical_skills || []} />
              <Experiences experience={data?.experience || []} />
            </div>
          </div>
          <Footer />
        </>}
      </div>
    </AppContext.Provider>
  </>
}

export default App
