import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote, selectValue } from "../redux/modules/quoteSlice";

const Quote = () => {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item.quote}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getRandomQuote())}>Get New Quote</button>
    </div>
  );
};

export default Quote;
