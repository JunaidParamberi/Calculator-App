import React from "react";
import Buttons from "./Buttons";
function Results({ input, result }) {
  return (
    <div className="result-container dark ">
      <div className="texts">
        <h1>{input}</h1>
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default Results;
