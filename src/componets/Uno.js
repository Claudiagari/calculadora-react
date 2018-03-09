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
            <button>1</button>
            <button>2</button>
            <button>3</button>
            </div> 
           <div> 
            <button>4</button>
            <button>5</button>
            <button>6</button>
           </div>
           <div> 
            <button>7</button>
            <button>8</button>
            <button>9</button>
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