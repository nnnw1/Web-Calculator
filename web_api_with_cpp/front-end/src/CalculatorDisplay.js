import React from "react";

export default function CalculatorDisplay(props) {
    return (
        <input value={props.text} readOnly={true} className="calculator-display"></input>
    );
}