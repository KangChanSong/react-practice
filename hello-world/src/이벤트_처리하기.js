import React from 'react';
import ReactDOM from 'react-dom';
import './my/practice.css' ;

class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {number : 1};
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            number : prevState.number + 1
        }));
    }

    render(){
        return (
            <button onClick = {this.handleClick}> NUMBER : {this.state.number}</button>
        )
    }
}

ReactDOM.render(
    <Event />
    , document.getElementById('root'));
