import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 아직 끓지 않습니다.</p>
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {temperature: '', scale: 'c'};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    }

    handleCelsiusChange(temperature){
        this.setState({scale : 'c', temperature});
    }

    handleFarenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const farenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                 scale = 'c'
                 temperature = {celsius}
                 onTemperatureChange = {this.handleCelsiusChange} />
                <TemperatureInput 
                scale = 'f'
                temperature = {farenheit}
                onTemperatureChange = {this.handleFarenheitChange} />
                <BoilingVerdict celsius = {celsius} />
            </div>
        )
    }
}

const scaleNames = {
    c: '섭씨',
    f: '화씨'
}

function toCelsius(farenheit){
    return (farenheit - 32) * 5/ 9;
}

function toFarenheit(celsius){
    return (celsius * 9 /5 ) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>{scaleNames[scale]} 로 온도를 입력하세요:</legend>
                <input 
                    value = {temperature}
                    onChange = {this.handleChange}
                ></input>
            </fieldset>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)