import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import './icon/style.css'
import './delete'

function Calculator(props) {
  
  return (
    <div>
    <h1>CALCULADORA</h1>
    <div className="d-flex align-items-center h100 ">
        
        
        
      <div className="container w30 bg-grey radius col-md-4">
        <div className="row ">
          <div className="col-12  p-4 text-right font-1 ">{props.number}</div>
        </div>
        <div className="row font-1">
          <div className="col-3  p-3 bg-red item" onClick={props.sum}><div>+</div></div>
          <div className="col-3  p-3 bg-red item" onClick={props.rest}>-</div>
          <div className="col-3  p-3 bg-red item" onClick={props.multi}>*</div>
          <div className="col-3  p-3 bg-red item" onClick={props.divi}>/</div>
        </div>
        <div className="row font-1">
          <div className="col-4  p-3 item" onClick={props.onCapture1}>1</div>
          <div className="col-4  p-3 item" onClick={props.onCapture2}>2</div>
          <div className="col-4  p-3 item" onClick={props.onCapture3}>3</div>
        </div>
        <div className="row font-1">
          <div className="col-4  p-3 item" onClick={props.onCapture4}>4</div>
          <div className="col-4  p-3 item" onClick={props.onCapture5}>5</div>
          <div className="col-4  p-3 item" onClick={props.onCapture6}>6</div>
        </div>
        <div className="row font-1">
          <div className="col-4  p-3 item" onClick={props.onCapture7}>7</div>
          <div className="col-4  p-3 item" onClick={props.onCapture8}>8</div>
          <div className="col-4  p-3 item" onClick={props.onCapture9}>9</div>
        </div>
        <div className="row font-1">
          <div className="col-4  p-3 item" onClick={props.Number}>C</div>
          <div className="col-4  p-3 item" onClick={props.onCapture0}>0</div>
          <div className="col-4  p-3 item" >.</div>
        </div>
        <div className="row font-1">
          <div className="col-12 p-3 orange " onClick={props.onCaptureDelet}><span className="icon-arrow-left item"></span></div>
          <div className="col-12 p-3 orange item" onClick={props.equal}>=</div>
        </div>
      </div>
      <div className="container w30 radius col-md-5 console-style">
        <p>{props.number}</p>
        <p>{props.number}</p>
        <p>{props.number}</p>
        <p>{props.number}</p>
      </div>
    </div>
    </div>
  )
}


function mapStateToProps(state) {
  //console.log('mapStateToProps', state.number);
  return {
       number: state.number,
       
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
     
      onCapture1: () => {
          const action = {
              type: 'NUMBER_1'
          };
          
          dispatch(action);
      },
      onCapture2: () => {
          const action = {
              type: 'NUMBER_2'
          };
          dispatch(action);
      },
      onCapture3: () => {
          const action = {
              type: 'NUMBER_3'
          };
          dispatch(action);
      },
      onCapture4: () => {
          const action = {
              type: 'NUMBER_4'
          };
          dispatch(action);
      },
      onCapture5: () => {
          const action = {
              type: 'NUMBER_5'
          };
          dispatch(action);
      },
      onCapture6: () => {
          const action = {
              type: 'NUMBER_6'
          };
          dispatch(action);
      },
      onCapture7: () => {
          const action = {
              type: 'NUMBER_7'
          };
          dispatch(action);
      },
      onCapture8: () => {
          const action = {
              type: 'NUMBER_8'
          };
          dispatch(action);
      },
      onCapture9: () => {
          const action = {
              type: 'NUMBER_9'
          };
          dispatch(action);
      },
      onCapture0: () => {
        const action = {
            type: 'NUMBER_0'
        };
        dispatch(action);
    },

      sum: () => {
          const action = {
              type: 'SUM'
          };
          dispatch(action);
      },
      rest: () => {
        const action = {
            type: 'REST'
        };
        dispatch(action);
      },
      multi: () => {
       const action = {
          type: 'MULTI'
      };
      dispatch(action);
      },
       divi: () => {
      const action = {
        type: 'DIVI'
       };
       dispatch(action);
    },
      equal: () => {
       const action = {
              type: 'EQUAL'
        };
        dispatch(action);
      },
      onCaptureReset: () => {
        const action = {
               type: 'RESET'
         };
         dispatch(action);
       },
       onCaptureDelet: () => {
           
        alert('hola aun el equipo esta trabajando para una mejor experiencia en sus calculos!');
       }

      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);