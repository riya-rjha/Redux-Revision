import React, { useState } from "react";
import quotes from "../quotes.js";

const AddQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");

  // Dummy way to add quotes
  const handleSubmit = (e) => {
    e.preventDefault();
    let newQuote = { quote: quote, author: author, tag: tag };
    // quotes = [...quotes, newQuote]; // Error -> When quotes is imported from quotes.js it is done so by treating the variable as a constant
    quotes.push(newQuote); // push appends elements to the array
    console.log(quotes);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add a New Quote
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Share your favourite quotes with us
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label htmlFor="quote" className="sr-only">
                Quote
              </label>
              <textarea
                id="quote"
                name="quote"
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                text-gray-900 rounded-t-md focus:outline-none
                 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm resize-none"
                placeholder="Enter the quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="author" className="sr-only">
                Author
              </label>
              <input
                id="author"
                name="author"
                type="text"
                autoComplete="author"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm "
                placeholder="Author's name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="tag" className="sr-only">
                Tag
              </label>
              <input
                id="tag"
                name="tag"
                type="text"
                autoComplete="tag"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm "
                placeholder="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition delay-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuote;
