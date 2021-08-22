import React from 'react';
import ReactDOM from 'react-dom';

function FancyBorder(props){
    return (
        <div className = {'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props){
    return (
        <FancyBorder color = "blue">
            <h1 className = "Dialog-title">
                {props.title}
            </h1>
            <p className = "Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    )
}

function WelcomeDialog(){
    return (
        <Dialog
        title = "제목"
        message = "안녕하세요" />
    )
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
)