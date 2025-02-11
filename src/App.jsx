import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Components
import Heading from './Components/Heading.jsx';
import BackgroundVideo from './Components/BackgroundVideo.jsx';
import Loader from './Components/Loader.jsx'; 
import { AnimatePresence, motion } from 'framer-motion';
import Feature from './Components/Features.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loader visible for 3 seconds
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <BackgroundVideo />
              <Heading />
              
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;

