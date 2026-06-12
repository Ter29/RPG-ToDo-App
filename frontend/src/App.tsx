import { Dashboard } from './pages/Dashboard/Dashboard';
import { IntroAnimation } from './pages/IntroAnimation/IntroAnimation';
import { useState } from 'react';

const INTRO_DATE_KEY = 'lastIntroDate';

function getTodayDate() {
  return new Date().toLocaleDateString('en-CA');
}

//for debugging in dev tools
//localStorage.removeItem('lastIntroDate');

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    const today = getTodayDate();
    const lastIntroDate = localStorage.getItem(INTRO_DATE_KEY);

    return lastIntroDate !== today;
  });
  function handleIntroComplete(){
    const today = getTodayDate();
    
    localStorage.setItem(INTRO_DATE_KEY, today);
    setShowIntro(false);
  }

  return showIntro ? (
    <IntroAnimation onComplete={handleIntroComplete} />
  ) : (
    <Dashboard />
  );
}

export default App;