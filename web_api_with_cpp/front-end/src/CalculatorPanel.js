import React from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

export default function CalculatorPanel(props) {
    const buttonConfigs = [
        {text: "7", handler: ()=>props.numberClicked("7")}, 
        {text: "8", handler: ()=>props.numberClicked("8")}, 
        {text: "9", handler: ()=>props.numberClicked("9")}, 
        {text: "/", handler: ()=>props.operationClicked("divide")},
        {text: "4", handler: ()=>props.numberClicked("4")}, 
        {text: "5", handler: ()=>props.numberClicked("5")}, 
        {text: "6", handler: ()=>props.numberClicked("6")}, 
        {text: "*", handler: ()=>props.operationClicked("multiply")},
        {text: "1", handler: ()=>props.numberClicked("1")}, 
        {text: "2", handler: ()=>props.numberClicked("2")}, 
        {text: "3", handler: ()=>props.numberClicked("3")}, 
        {text: "-", handler: ()=>props.operationClicked("minus")},
        {text: "0", handler: ()=>props.numberClicked("0")}, 
        {text: ".", handler: ()=>props.dotClicked()}, 
        {text: "C", handler: ()=>props.clearClicked()}, 
        {text: "+", handler: ()=>props.operationClicked("add")},
        {text: "=", handler: ()=>props.equalClicked()}
    ];

    const buttons = buttonConfigs.map((value, index) => {
        return (<CalculatorButton name={value.text} onClick={value.handler}></CalculatorButton>)
    });

    return (
        <div className="calculator-grid-container">
            <CalculatorDisplay text={props.result}></CalculatorDisplay>
            {buttons}
        </div>
    );
}