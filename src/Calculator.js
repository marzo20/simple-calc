import React, { Component } from 'react'
import './App.css';
import Result from './operations/Result'
class Calculator extends Component {
    state = {
        num1: "",
        num2: "",
        operation: "",
        result: "",
        msg: ""
    }
    handleNumberChange = e => {
        const updatedInput = {[e.target.name]: e.target.value}
        console.log(updatedInput)
        this.setState(updatedInput)
    }
    addNumbers = e => {
        e.preventDefault()
        this.setState({
            result: eval(`${parseInt(this.state.num1)}${this.state.operation}${parseInt(this.state.num2)}`),
            msg: "Result is"
        })
        console.log(this.state.result)
        this.setState({num1: "", num2:""})
    }
    changeOperation = (e) => {
        this.setState({operation: e.target.value})
        console.log(this.state.operation)
    }
    render() {
        return( 
        <>
        <div className="container">
            <h1>Calculate with React!</h1>
      
            <div className="add">
                <form onSubmit={this.addNumbers}>
                    <input type="text" name="num1" onChange={this.handleNumberChange} value={this.state.num1}/>
                    <select onChange={this.changeOperation}>
                        <option>choose operation</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input type="text" name="num2" onChange={this.handleNumberChange} value={this.state.num2} />
                    <button 
                    type="submit" 
                    >=</button>
                    <Result result={this.state.result} msg={this.state.msg}/>
                </form>
            </div>
        </div>
        </>
        )
    }
}

export default Calculator