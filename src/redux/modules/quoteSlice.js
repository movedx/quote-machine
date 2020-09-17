import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const QUOTE_URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    value: [],
  },
  reducers: {
    setQuote: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setQuote } = quoteSlice.actions;

export const getRandomQuote = () => async (dispatch) => {
  const res = await axios.get(QUOTE_URL);
  console.log(res.data);
  dispatch(setQuote(res.data.quotes));
};

export const selectValue = (state) => state.quote.value;

export default quoteSlice.reducer;
