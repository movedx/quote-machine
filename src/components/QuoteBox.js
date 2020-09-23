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
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        id="quote-box"
        style={{
          width: "400px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#e7e7e7",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <div>
          <h6 id="author">{author}</h6>
        </div>
        <div>
          <p
            id="text"
            style={{ minHeight: "130px", padding: "1rem 0rem 1rem 0rem" }}
          >
            {quote}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            id="new-quote"
            type="button"
            onClick={() => dispatch(getRandomQuote())}
            style={{
              backgroundColor: "white",
              border: "1px solid #e7e7e7",
              borderRadius: "10px",
              color: "black",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              outline: "0px",
              boxShadow:
                "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            }}
          >
            New Quote
          </button>
        </div>
      </div>
      <a
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quote + " - " + author
        )}`}
        style={{
          margin: "1rem",
          position: "absolute",
          top: "0px",
          right: "0%",
        }}
      >
        <span className="fa fa-twitter"></span>
      </a>
    </div>
  );
};

export default QuoteBox;
