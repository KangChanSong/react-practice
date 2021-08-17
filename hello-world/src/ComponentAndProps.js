import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function MemberName(props){
  return (
      <div className ="MemberName">
        <h1> hi, my name is {props.name.firstName} {props.name.lastName}</h1>
      </div>
  );
}

function MemberAddress(props){
  return (
    <div className = "MemberAddress">
      <h3> I live in {props.address.city} {props.address.road} {props.address.postcode}</h3>
    </div>
  )
}

function MemberSpecification(props){
  return (
    <div className = "MemberSpec">
      <h4> I am {props.spec.gender} and my phone is {props.spec.phone} and i want to become a great {props.spec.job}</h4>
    </div>
  )
}

function Member(props){
  return (
    <div className = "Member">
      <MemberName name= {props.name} />      
      <MemberAddress address = {props.address} />
      <MemberSpecification spec = {props.spec} />
    </div>
  )
}

const member = {
  name : {
    firstName : "KangChan",
    lastName : "Song",
  },
  address : {
    city : "Seongnam",
    road : "Yatap 20",
    postcode : "102312"
  },
  spec : {
    gender : "MALE",
    phone : "01030809839",
    job : "Backend Developer",
    married : "No",
  }
}

ReactDOM.render(
  <Member 
    name = {member.name}
    address = {member.address}
    spec = {member.spec}
  />
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
