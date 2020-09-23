import React, { useEffect } from "react";
import QuoteBox from "./components/QuoteBox";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <QuoteBox />
    </div>
  );
};

export default App;
