import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRandomQuote,
  selectQuote,
  selectAuthor,
} from "../redux/modules/quoteSlice";

const QuoteBox = () => {
  const quote = useSelector(selectQuote);
  const author = useSelector(selectAuthor);
  const dispatch = useDispatch();
  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">{author}</div>
      <div id="new-quote">
        <button onClick={() => dispatch(getRandomQuote())}>New Quote</button>
      </div>
      <a href="#" id="tweet-quote">
        Tweet quote
      </a>
    </div>
  );
};

export default QuoteBox;

// <div id="quote-box">
//   <p>
//     {quote} <br /> {author}
//   </p>
//   <button onClick={() => dispatch(getRandomQuote())}>Get New Quote</button>
// </div>;
