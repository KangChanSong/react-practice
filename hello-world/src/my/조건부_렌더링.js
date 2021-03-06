import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(){
    return <h1>Welcome Back!</h1>
}

function GuestGreeting(){
    return <h1>Please log in</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props){
    return (
        <button onClick = {props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginController extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn : false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn : true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn : false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        
        let button ;

        return (
            <div>
                <Greeting isLoggedIn = {isLoggedIn} />
                {isLoggedIn ?
                <LogoutButton onClick ={this.handleLogoutClick} />
                : <LoginButton onClick = {this.handleLogoutClick} />}
                {button}            
            </div>
        )
    }
}

ReactDOM.render(
    <LoginController />,
    document.getElementById('root')
)