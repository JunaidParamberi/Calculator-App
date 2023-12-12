import { useState } from "react";
import Results from "./Components/Results";
import Buttons from "./Components/Buttons";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div className="App-container">
      <Results input={input} result={result} />

      <Buttons
        input={input}
        setInput={setInput}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
