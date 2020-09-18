import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRandomQuote,
  selectQuote,
  selectAuthor,
} from "../redux/modules/quoteSlice";

const QuoteBox = () => {
  useEffect(() => {
    dispatch(getRandomQuote());
  }, []);
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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quote + " - " + author
        )}`}
        id="tweet-quote"
      >
        Tweet quote
      </a>
    </div>
  );
};

export default QuoteBox;
