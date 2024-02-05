import React, { useState } from "react";
import "./Calculate.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Calculate() {
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const toggleHeightFields = () => {
    if (heightUnit === "cm") {
      setHeight("");
    } else {
      setFeet("");
      setInches("");
    }
  };

  const toggleWeightLabel = () => {
    setWeight("");
  };

  const calculateBMI = () => {
    let calculatedHeight = height;

    if (heightUnit === "feetInches") {
      calculatedHeight = parseFloat(feet) * 12 + parseFloat(inches);
    }

    let calculatedWeight = parseFloat(weight);

    if (
      isNaN(calculatedHeight) ||
      isNaN(calculatedWeight) ||
      calculatedHeight <= 0 ||
      calculatedWeight <= 0
    ) {
      setResult(
        "Please enter valid <span>height</span> and <span>weight</span>"
      );
      return;
    }

    if (heightUnit !== "cm") {
      calculatedHeight = calculatedHeight * 2.54;
    }

    if (weightUnit === "lbs") {
      calculatedWeight = calculatedWeight * 0.453592;
    }

    const bmi = calculatedWeight / Math.pow(calculatedHeight / 100, 2);

    let resultMessage = `Your BMI is <span>${bmi.toFixed(2)}</span>  `;

    if (bmi < 18.5) {
      resultMessage += "<br />You are <span>Underweight</span>";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultMessage += "<br />You have a <span>Normal weight</span>";
    } else if (bmi >= 25 && bmi < 30) {
      resultMessage += "<br />You are <span>Overweight</span>";
    } else {
      resultMessage += "<br />You are <span>Obese</span>";
    }

    setResult(resultMessage);
  };

  return (
    <div>
      <Header />
      <div className="Hero-section">
        <div className="calculate-main-container">
          <div className="form-side">
            <h1>
              Calculate Your <span>BMI </span>Now!
            </h1>
            <form id="bmiForm">
              <div className="form-in">
                <div className="units-selection">
                  <h2>
                    Choose <span>Units</span>
                  </h2>
                  <div className="selection">
                    <label htmlFor="heightUnit"> Height Unit:</label>
                    <select
                      id="heightUnit"
                      value={heightUnit}
                      onChange={(e) => {
                        setHeightUnit(e.target.value);
                        toggleHeightFields();
                      }}
                    >
                      <option value="cm">Centimeters (cm)</option>
                      <option value="feetInches">Feet & Inches</option>
                    </select>
                  </div>
                  <div className="selection">
                    <label htmlFor="weightUnit"> Weight Unit:</label>
                    <select
                      id="weightUnit"
                      value={weightUnit}
                      onChange={(e) => {
                        setWeightUnit(e.target.value);
                        toggleWeightLabel();
                      }}
                    >
                      <option value="kg">Kilograms (kg)</option>
                      <option value="lbs">Pounds (lbs)</option>
                    </select>
                  </div>
                </div>
                <div className="calculator-container">
                  <h2>
                    Enter <span>Values</span>
                  </h2>
                  <div className="input-group" id="heightInput">
                    {heightUnit === "cm" ? (
                      <div className="ft-in">
                        <label htmlFor="height">Height (cm):</label>
                        <input
                          type="number"
                          id="height"
                          placeholder="Click to Enter"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          required
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="ft-in">
                          <label htmlFor="feet"> Feets (ft): </label>
                          <input
                            type="number"
                            id="feet"
                            placeholder="Click to Enter"
                            value={feet}
                            onChange={(e) => setFeet(e.target.value)}
                            required
                          />
                        </div>
                        <div className="ft-in">
                          <label htmlFor="inches"> Inches (in): </label>
                          <input
                            type="number"
                            id="inches"
                            placeholder="Click to Enter"
                            value={inches}
                            onChange={(e) => setInches(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="input-group" id="weightInput">
                    <div className="w8-in">
                      <label htmlFor="weight">
                        {weightUnit === "kg" ? "Weight (kg):" : "Weight (lbs):"}
                      </label>
                      <input
                        type="number"
                        id="weight"
                        placeholder="Click to Enter"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div
                    id="result"
                    dangerouslySetInnerHTML={{ __html: result }}
                  ></div>
                </div>
              </div>
              <button id="calculate-btn" type="button" onClick={calculateBMI}>
                Calculate BMI
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calculate;
