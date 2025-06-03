
"use client";
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import './globals.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SplashScreen from '../components/common/SplashScreen';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time if needed
    setTimeout(() => {
      setShowContent(true);
    }, 1400); // Match this with the splash screen animation duration
  }, []);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          {loading && <SplashScreen onComplete={handleSplashComplete} />}
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="App">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </motion.div>
      </body>
    </html>
  );
}

