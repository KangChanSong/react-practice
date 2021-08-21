import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : '에세이를 입력하세요'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value : event.target.value})
        console.log(this.state.value);
    }

    handleSubmit(event){
        alert('에세이가 출간됐습니다 : ' + this.state.value);
        event.preventDefault();
    }


    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Essay: 
                    <textarea value= {this.state.value} onChange={this.handleChange}></textarea>
                </label>
            </form>
        )
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
)