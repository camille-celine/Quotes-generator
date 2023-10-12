import React, { useState } from "react";
import Quote from "./Quote";
import "./QuoteList.css";
import axios from "axios";

const baseURL = "https://api.quotable.io/quotes/random";

export const QuoteTest = () => {

    const [quote, setQuote ] = useState("");
  
    const getQuote = async () => {
      axios.get(baseURL).then((response) => {
        let newQuote = response.data[0];
        console.log(newQuote);
        setQuote(newQuote);
      });
    };
  
    return (
      <>
        <div className='QuoteList'>
          <div className='QuoteList-sidebar'>
            <h1 className='QuoteList-title'>
              <span>Quote</span> Generator
            </h1>
            <i className="fa-solid fa-quote-left fa-flip-vertical"></i>
            {/* why not getQuote() ? */}
            <button className='QuoteList-getmore' onClick={getQuote}>
              Fetch Quote
            </button>
          </div>
          <div className='QuoteList-quotes'>
            {!quote ?  <div className='Quote Quote-text'>- Click to get a quote - </div>  : <Quote text={quote.content} author={quote.author}/> }
          </div>
        </div>
      </>
    );
  
}

export default QuoteTest;








