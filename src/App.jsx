import { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import CallModal from './components/CallModal';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the custom loader for 2.5 seconds on initial visit
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <CallModal />
      <Analytics />
    </>
  )
}

export default App
