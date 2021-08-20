import React from 'react';
import ReactDOM from 'react-dom';


function NumberList(props){
    const numbers = props.numbers;

    const ItemList = numbers.map((n) => <li key={n.toString()}>{n}</li>)

    return (
        <ul>{ItemList}</ul>
    )
}

const numbers = [1,2,3,4,5];

ReactDOM.render(
    <NumberList numbers = {numbers} />,
    document.getElementById('root')
)