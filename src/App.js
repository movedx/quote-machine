import React, { useEffect } from "react";
import QuoteBox from "./components/QuoteBox";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <QuoteBox />
    </div>
  );
};

export default App;
