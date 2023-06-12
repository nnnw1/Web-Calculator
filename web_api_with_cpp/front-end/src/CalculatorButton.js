import React from 'react'

export default function CalculatorButton(props) {
    return (
        <input 
            type='button' 
            value={props.name} 
            className={props.name === "=" ? "calculator-equal-button" : null}
            onClick={props.onClick}
        ></input>
    );
}