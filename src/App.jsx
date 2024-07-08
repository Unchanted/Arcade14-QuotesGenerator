"use client";

import React from 'react';
import { motion } from "framer-motion";
import {AuroraBackground } from "./components/ui/aurora-background.tsx"
import './App.css';
import QuoteGenerator from './components/QuoteGenerator.jsx';

function App() {
  return (
     <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className = "relative flex flex-col gap-4 items-center justify-center px-4"
        >
      <header className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8"> Inspirational Quotes from Celebrity</h1>
        <QuoteGenerator />
      </header>
      </motion.div>
    </AuroraBackground>
  );
}

export default App;
