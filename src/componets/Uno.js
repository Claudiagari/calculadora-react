import React, { Component } from 'react';
class Uno extends Component {
  render() {
    return (
      <div className="uno">
        <div className="resul">
        </div>
        <div className="Numbers">
          <div>
            <div>
            <button onClick={props.number1}>1</button>
            <button onClick={props.number2}>2</button>
            <button onClick={props.number3}>3</button>
            </div> 
           <div> 
            <button onClick={props.number4}>4</button>
            <button onClick={props.number5}>5</button>
            <button onClick={props.number6}>6</button>
           </div>
           <div> 
            <button onClick={props.number7}>7</button>
            <button onClick={props.number8}>8</button>
            <button onClick={props.number9}>9</button>
            </div> 
        </div>
        <div className="Oper">
           
            <button>+</button>
            <button>-</button>
            <button>x</button>
           
        </div>     
        </div> 
        <div className="ContentList">
          <div className="Conten-list">
          </div>
        </div> 

      </div>
    );
  }
}
export default Uno;