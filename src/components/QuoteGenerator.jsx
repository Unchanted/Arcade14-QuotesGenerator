"use client";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/ch.ts"; 

const quotes = [
  { quote: "May the Force be with you.", author: "Star Wars" },
  { quote: "I'm the king of the world!", author: "Titanic" },
  { quote: "My precious.", author: "The Lord of the Rings" },
  { quote: "To infinity and beyond!", author: "Toy Story" },
  { quote: "Here's looking at you, kid.", author: "Casablanca" },
  { quote: "Go ahead, make my day.", author: "Sudden Impact" },
  { quote: "I'll be back.", author: "The Terminator" },
  { quote: "You can't handle the truth!", author: "A Few Good Men" },
  { quote: "I see dead people.", author: "The Sixth Sense" },
  { quote: "Houston, we have a problem.", author: "Apollo 13" },
  { quote: "There's no place like home.", author: "The Wizard of Oz" },
  { quote: "Bond. James Bond.", author: "Dr. No" },
  { quote: "E.T. phone home.", author: "E.T. the Extra-Terrestrial" },
  { quote: "Yippie-ki-yay, motherf****r!", author: "Die Hard" },
  { quote: "You had me at 'hello'.", author: "Jerry Maguire" },
  { quote: "They may take our lives, but they'll never take our freedom!", author: "Braveheart" },
  { quote: "Keep your friends close, but your enemies closer.", author: "The Godfather Part II" },
  { quote: "Say 'hello' to my little friend!", author: "Scarface" },
  { quote: "Just keep swimming.", author: "Finding Nemo" },
  { quote: "You talking to me?", author: "Taxi Driver" },
  { quote: "Why so serious?", author: "The Dark Knight" },
  { quote: "Hasta la vista, baby.", author: "Terminator 2: Judgment Day" },
  { quote: "Elementary, my dear Watson.", author: "The Adventures of Sherlock Holmes" },
  { quote: "I'll have what she's having.", author: "When Harry Met Sally" },
  { quote: "It's alive! It's alive!", author: "Frankenstein" },
  { quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.", author: "Forrest Gump" },
  { quote: "I'm king of the world!", author: "Titanic" },
  { quote: "Here's Johnny!", author: "The Shining" },
  { quote: "I am Groot.", author: "Guardians of the Galaxy" },
  { quote: "You're gonna need a bigger boat.", author: "Jaws" },
  { quote: "I feel the need—the need for speed.", author: "Top Gun" },
  { quote: "I'm walking here! I'm walking here!", author: "Midnight Cowboy" },
  { quote: "Carpe diem. Seize the day, boys.", author: "Dead Poets Society" },
  { quote: "Nobody puts Baby in a corner.", author: "Dirty Dancing" },
  { quote: "You're tearing me apart, Lisa!", author: "The Room" },
  { quote: "Life is like a box of chocolates. You never know what you're gonna get.", author: "Forrest Gump" },
  { quote: "Keep the change, ya filthy animal.", author: "Home Alone" },
  { quote: "Mama says, 'Stupid is as stupid does.'", author: "Forrest Gump" },
  { quote: "Say 'hello' to my little friend!", author: "Scarface" },
  { quote: "I'm too old for this shit.", author: "Lethal Weapon" },
  { quote: "You had me at 'hello'.", author: "Jerry Maguire" },
  { quote: "Just keep swimming.", author: "Finding Nemo" },
  { quote: "Houston, we have a problem.", author: "Apollo 13" },
  { quote: "Keep your friends close, but your enemies closer.", author: "The Godfather Part II" },
  { quote: "To infinity and beyond!", author: "Toy Story" },
  { quote: "There's no place like home.", author: "The Wizard of Oz" },
];

const FlipWords = ({ words, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [key, setKey] = useState(0);

  const startAnimation = useCallback(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setKey(prevKey => prevKey + 1); 
  }, [words]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <AnimatePresence>
      <motion.div
        key={key} 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 100, damping: 10 }}
        exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }}
        className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}
      >
        {currentWord.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="text-center flex flex-col items-center">
      <FlipWords words={[currentQuote.quote]} className="text-xl italic mb-4" />
      <FlipWords words={[currentQuote.author]} className="text-lg font-semibold mb-8" />
      <button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        onClick={generateQuote}
      >
        Generate New Quote
      </button>
    </div>
  );
}

export default QuoteGenerator;
