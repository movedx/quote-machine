import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

const QUOTE_URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: "",
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
  },
});

export const { setQuote } = quoteSlice.actions;

export const getRandomQuote = () => async (dispatch) => {
  const res = await axios.get(QUOTE_URL);
  dispatch(setQuote(_.sample(res.data.quotes)));
};

export const selectQuote = (state) => state.quote.quote;
export const selectAuthor = (state) => state.quote.author;

export default quoteSlice.reducer;
