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
    <div>
      <p>
        {quote} <br /> {author}
      </p>
      <button onClick={() => dispatch(getRandomQuote())}>Get New Quote</button>
    </div>
  );
};

export default QuoteBox;
