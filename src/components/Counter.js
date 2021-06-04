import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: 0,
            goal: props.goal,
            name: props.name,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(y) {
        y === 0 ?
        this.setState(prevState => {
            return {
                value: prevState.value * 0
            }
        }) :
        this.setState(prevState => {
            return {
                value: prevState.value + y
            }
        })
    }

    

    render(){
        return(
            <div>
                <p>{this.props.name}: {this.state.value}/{this.props.goal}</p>
                <button onClick={() => this.handleClick(1)}>+1</button>
                <button onClick={() => this.handleClick(2)}>+2</button>
                <button onClick={() => this.handleClick(4)}>+4</button>
                <button onClick={() => this.handleClick(10)}>+10</button>
                <button onClick={() => this.handleClick(0)}>reset</button>
            </div>
        )
    }
}

export default Counter;