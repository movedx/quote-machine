import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRandomQuote,
  selectQuote,
  selectAuthor,
} from "../redux/modules/quoteSlice";

const QuoteBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);
  const quote = useSelector(selectQuote);
  const author = useSelector(selectAuthor);

  return (
    <div
      id="quote-box"
      className="card"
      style={{ width: "18rem", margin: "auto", marginTop: "100px" }}
    >
      <div className="card-body">
        <h6 id="author" className="card-subtitle mb-2 text-muted">
          {author}
        </h6>
        <p id="text" className="card-text">
          {quote}
        </p>
        <button
          id="new-quote"
          type="button"
          className="btn btn-outline-dark card-link"
          onClick={() => dispatch(getRandomQuote())}
        >
          New Quote
        </button>
        <a
          className="btn btn-social-icon btn-twitter card-link"
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            quote + " - " + author
          )}`}
        >
          <span class="fa fa-twitter"></span>
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
