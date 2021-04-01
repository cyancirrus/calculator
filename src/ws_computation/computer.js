import React from 'react'
import { Image, Container } from 'semantic-ui-react'

function arrayContains(arr, elem) {
    return arr.indexOf(elem) !== -1
}

function add(x,y) {
    return x + y;
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function compute(x, y, operator) {
    if (operator == '+') {
        return add(x, y);
    }
    if (operator === '-') {
        return subtract(x, y);
    }
    if (operator === '*') {
        return multiply(x, y);
    }
    if (operator === '/') {
        return divide(x, y);
    }
}

function tryCompute(x, y, operator) {
    const supportedOperations = ['+', '-', '*', '/']
    const xInput = parseFloat(x);
    const yInput = parseFloat(y);
    const validation = (
        arrayContains(supportedOperations, operator) && 
        ! Number.isNaN(xInput) &
        ! Number.isNaN(yInput)
    );
    if (validation) {
        return compute(xInput, yInput, operator);
    }
    return "computation"
}

class CalculatorInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onCalculatorChange(e.target.value);
    }
    render() {
        const calculatorField = this.props.calculatorField;
        const calculatorFieldName = this.props.calculatorFieldName;
        return (
            <div class="ui input focus">
                <input 
                    type="text" 
                    placeholder={calculatorFieldName}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.handleBaseNumber = this.handleBaseNumber.bind(this);
        this.handleAuxNumber = this.handleAuxNumber.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        // this.helpRender = this.helpRender.bind(this)
        this.state = {
            baseNumber: '',
            auxNumber: '',
            operator:''
        }
    }
    handleBaseNumber(e) {
        this.setState({baseNumber: e});
    }
    handleAuxNumber(e) {
        this.setState({auxNumber: e});
    }

    handleOperator(o) {
        this.setState({operator: o});
    }

    // helpRender() {
    //     return  this.state.keys
    // }
    render() {
        const baseNumber = this.state.baseNumber
        const auxNumber = this.state.auxNumber
        const operator = this.state.operator
        const output = tryCompute(baseNumber, auxNumber, operator)
        return (
            <div class="ui equal width center alligned four column grid">
                <div class="column">
                    <CalculatorInput
                    calculatorFieldName='baseNumber'
                    calculatorField={baseNumber}
                    onCalculatorChange={this.handleBaseNumber}
                    />
                </div>
                <div class="column">    
                    <CalculatorInput
                        calculatorFieldName='auxNumber'
                        calculatorField={auxNumber}
                        onCalculatorChange={this.handleAuxNumber}
                    />
                </div>
                <div class="column">
                    <CalculatorInput
                        calculatorFieldName='operator'
                        calculatorField={operator}
                        onCalculatorChange={this.handleOperator}
                    />
                </div>
                <div class="column">
                    <button class="fluid ui button" name="what">
                        {output}
                    </button>
                </div>
            </div>
        );
    }
}

export default Computer;
