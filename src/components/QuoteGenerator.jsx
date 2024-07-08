import React, { useState } from 'react';

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
];

function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <p>"{currentQuote.quote}"</p>
      <p><i>- {currentQuote.author}</i></p>
      <button onClick={generateQuote}>Generate New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
