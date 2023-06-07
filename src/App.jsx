import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    const updateFontSize = () => {
      const displayContainer = document.getElementById("displayContainer");
      const displayElement = document.getElementById("display");
      const containerWidth = displayContainer.offsetWidth;
      let fontSize = 50;
      if (displayValue.length >= 11) {
        fontSize= fontSize-displayValue.length;
      } else {
          fontSize = 50;
      }

      displayElement.style.fontSize = `${fontSize}px`;
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, [displayValue]);

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div className="calculator">
        <div className="displayContainer" id="displayContainer">
          <h2 className="display" id="display">
            {displayValue}
          </h2>
        </div>

        <div>
          <button className="btnNumber" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="btnNumber" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="btnNumber" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button
            className="btnNumber operator"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>
        <div>
          <button className="btnNumber" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="btnNumber" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="btnNumber" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button
            className="btnNumber operator"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
        </div>
        <div>
          <button className="btnNumber" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button className="btnNumber" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button className="btnNumber" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button
            className="btnNumber operator"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
        </div>
        <div>
          <button className="btnNumber" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button className="btnNumber" onClick={() => handleClear()}>
            C
          </button>
          <button className="btnNumber" onClick={() => handleCalculate()}>
            =
          </button>
          <button
            className="btnNumber operator"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
