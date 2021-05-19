// Excercise 1

import React, { Component } from 'react';

class DigitalClock extends Component {
   state ={
       time:'00.00.00',
   };

componentDidMount() {
this.setTime();

    setInterval(() => {
        this.setTime();
    }, 1000);
}
// console.log(`${h}: ${m}:${s}`);
 
 

setTime() {
    let now = new Date(),
  h = now.getHours(),
   m = now.getMinutes(),
  s = now.getSeconds();

 this.setState({
     time: `${h}: ${m}:${s}`
      });
}

    render() {
        // const{time,m,s,h} = this.state;
        return (
            <div className="DigitalClock">
                <h2>Time is : {this.state.time}</h2>
                <br/>
                <button>Start clock</button>
            </div>
        );
    }
};

export default DigitalClock;