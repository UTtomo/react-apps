import React from 'react';
import ReactDOM from 'react-dom';


class Timer extends React.Component{

  constructor(props){
    super(props);
    this.state={your_name: 'tomochi', seconds: '180'}

  }
  Setname(){  
    console.log("Setting time");
  }
  Countdown(){

  }
  render(){
    return(
    <div>
      <input type="text" name="name" defaultValue={this.props.value} onCharge={this.Setname()} />
      <h1>Hello {this.state.your_name} </h1>
      <button onClick={()=>{this.Countdown()}}>Count Down Start!</button>
    </div>
    );
  }
}
const element = <Timer name="tomochi" seconds={180} />;
ReactDOM.render(
  element,
  document.getElementById('root')
);