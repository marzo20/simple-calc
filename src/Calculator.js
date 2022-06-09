import React, { Component } from 'react'
import './App.css';
class Calculator extends Component {
    state = {
        num1: "",
        num2: "",
        sum: ""
    }
    handleNumberChange = e => {
        const updatedInput = {[e.target.name]: e.target.value}
        console.log(updatedInput)
        this.setState(updatedInput)
    }
    addNumbers = e => {
        e.preventDefault()
        this.setState({
            sum: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
        this.setState({num1: "", num2:""})
        
        
    }
    
    render() {
        return( 
        <>
        <div className="container">
            <h1>Add with React!</h1>
      
            <div className="add">
                <form onSubmit={this.addNumbers}>
                    <input type="text" name="num1" onChange={this.handleNumberChange} value={this.state.num1}/>
                    <span>+</span>
                    <input type="text" name="num2" onChange={this.handleNumberChange} value={this.state.num2} />
                    <button 
                    type="submit" 
                    >=</button>
                    <h3>Sum is: {this.state.sum}</h3>
                </form>
            </div>
        </div>
        </>
        )
    }
}

export default Calculator