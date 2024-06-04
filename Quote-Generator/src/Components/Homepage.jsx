import React, { useState, useEffect } from "react";
import quotes from "../quotes.js";
import "../index.css";
import {Link} from "react-router-dom";
import AddQuote from './AddQuote.jsx';

const Homepage = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const optSelectingQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
      setTag(randomQuote.tag);
    };
    optSelectingQuote();
  }, []);

  const handleSearch = () => {
    for (const quote of quotes) {
      if (quote.tag.includes(searchTag)) {
        setQuote(quote.quote);
        setAuthor(quote.author);
        setTag(quote.tag);
        setErrorMsg("");
        break;
      } else {
        setErrorMsg(`No quote with "${searchTag}" tag exists in our dataset!`);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      }
    }
  };

  const handleNextQuote = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center m-10 flex-col gap-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Quote Generator
      </h1>
      {/* Options to search for quote related to tag */}
      <Link to={'/add'}> 
      {/* Adding a react component  in "to" causes type error due to rendering */}
      <p className="text-xl -mt-8 text-right border-2 cursor-pointer p-4 rounded-md hover:bg-gray-200 transition-all delay-75 shadow-lg border-gray-500">
        Want to add a Quote?
      </p>
      </Link>
      <div className="flex w-full items-center justify-center gap-5">
        <input
          type="text"
          className="outline-none border-2 border-gray-300 rounded-md flex-1 p-2"
          placeholder="Enter a tag to search"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
        />
        <button
          className=" border-purple-300 border-[2px] p-2 rounded-md 
      bg-slate-200 hover:bg-slate-400 transition-all delay-100"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {errorMsg && (
        <p className="text-xl text-red-600 animate-moveIn">{errorMsg}</p>
      )}
      <div className="flex flex-col w-full gap-8">
        {/* Quote */}
        <div className="flex flex-col items-center justify-center w-full p-10 bg-white rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-xl font-semibold text-gray-700">{quote}</h2>
        </div>
        {/* Name of Author */}
        <div className="flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-xl font-medium text-gray-600">~ {author}</h2>
        </div>
        {/* Tags used */}
        <div className="flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-xl font-medium text-gray-500">
            {tag.charAt(0).toUpperCase() + tag.slice(1)}{" "}
            {/* Capitalize function */}
          </h2>
        </div>
        {/* Upcoming next quote animation */}
        <div
          className="flex flex-col items-center justify-center 
      w-full p-6 bg-white rounded-lg shadow-lg border
       border-gray-300 cursor-pointer hover:bg-gray-200 transition-all delay-75"
          onClick={handleNextQuote}
        >
          {/* Placeholder for animation or future content */}
          <h2 className="text-xl text-gray-800">Click for next quote ⏭️</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
