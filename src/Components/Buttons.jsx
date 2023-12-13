import React from "react";

function Buttons({ input, setInput, result, setResult }) {
  function handleClick(value) {
    // setInput(input + value);

    if (result) {
      setInput(result + value);
      setResult("");
    } else {
      setInput(input + value);
    }
  }

  function handleCalculate() {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("error");
    }
  }

  function clearResult() {
    setResult();
    setInput("");
  }

  function findPercentage() {
    setResult(eval(input) / 100);
  }

  function changeTo() {
    if (input === +input) {
      setInput(-input);
    } else {
      setInput(+input);
    }
  }

  function currection() {
    setInput((prevInput) => prevInput.slice(0, -1));
  }

  return (
    <div className="buttons-container">
      <div className="buttons">
        <button onClick={clearResult}>AC</button>
        <button onClick={changeTo}>±</button>
        <button onClick={() => findPercentage("%")}>%</button>
        <button onClick={() => handleClick("/")} className="red">
          ÷
        </button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")} className="red star">
          *
        </button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")} className="red">
          -
        </button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")} className="red">
          +
        </button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={currection}>C</button>
        <button onClick={handleCalculate} className="assign-btn">
          =
        </button>
      </div>
    </div>
  );
}

export default Buttons;
