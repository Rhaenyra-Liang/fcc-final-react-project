import React, { useEffect, useState } from "react";
import { FaTwitterSquare } from "react-icons/fa";

function QuotePage() {
  // http://api.quotable.io/random

  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      });
  };

  return (
    <section className="h-screen text-pink-300 bg-gradient-to-bl from-gray-700 via-gray-900 to-black flex justify-center items-center">
      <div
        id="quote-box"
        className="grid p-10 gap-4 justify-center items-center  max-h-[800px] max-w-[600px] border rounded-2xl bg-slate-400/50 backdrop-blur-3xl "
      >
        <div className="grid  w-[500px] h-full gap-2">
          <p
            id="text"
            style={{ filter: "drop-shadow(0 0 10px)" }}
            className="self-end font-mono justify-self-center text-3xl"
          >
            "{quoteInfo.text}"
          </p>
          <p id="author" className="self-end font-serif justify-self-end">
            - {quoteInfo.author}
          </p>
        </div>
        <div className="flex flex-row-reverse  justify-center gap-2">
          <button
            id="new-quote"
            className=" bg-white rounded-lg px-2 py-1"
            onClick={getQuote}
          >
            New Quote
          </button>
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              quoteInfo.text
            }
            id="tweet-quote"
          ></a>
          <FaTwitterSquare className=" text-4xl cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default QuotePage;
