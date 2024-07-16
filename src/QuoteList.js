import React, { useState } from "react";
import Quote from "./Quote";
import "./QuoteList.css";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = "https://api.api-ninjas.com/v1/quotes";
const apiKey = process.env.REACT_APP_API_KEY;

export const QuoteTest = () => {

  const [quote, setQuote ] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  
  const getQuote = async () => {
    axios.get(baseURL, {
      headers: {
          'X-Api-Key': apiKey
      }
    }).then((response) => {
      let newQuote = response.data[0];
      setQuote(newQuote);
      console.log(newQuote);
    });
  };

  const onCopyText = () => {
    setIsCopied(true);
    if (isCopied) {
      toast.success("Copied Successfully !")
    } 
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
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
          <button style ={{display: quote ? 'block' : 'none'}} className='QuoteList-getmore' onClick={getQuote}>
            Fetch New Quote
          </button>
        </div>
        <div style={{flexWrap: quote ? 'nowrap' : 'wrap'}} className='QuoteList-quotes'>
          {!quote ?  
            <button className='QuoteList-getquote' onClick={getQuote}>
              Fetch Quote
            </button> 
            : 
            <>
              <Quote text={quote.quote} author={quote.author}/> 
              <div className='QuoteList-clipboard'>
              <CopyToClipboard text={quote.quote} onCopy={onCopyText}>
                <i className="fa-regular fa-copy"></i>
              </CopyToClipboard>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default QuoteTest;




