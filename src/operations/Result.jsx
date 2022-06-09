import React, { Component } from 'react'

class Result extends Component {
    render() {
        return( 
        <>
            <h3>{this.props.msg} {this.props.result}</h3>
        </>
    )}
}

export default Result