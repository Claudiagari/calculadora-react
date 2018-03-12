import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionNumber1} from '../actions/calculate'
import {actionNumber2} from '../actions/calculate'
import {actionNumber3} from '../actions/calculate'
import {actionNumber4} from '../actions/calculate'
import {actionNumber5} from '../actions/calculate'
import {actionNumber6} from '../actions/calculate'
import {actionNumber7} from '../actions/calculate'
import {actionNumber8} from '../actions/calculate'
import {actionNumber9} from '../actions/calculate'
import {actionNumber0} from '../actions/calculate'
import {actionSum} from '../actions/calculate'
import {actionRest} from '../actions/calculate'
import {actionMulti} from '../actions/calculate'
import {actionDivi} from '../actions/calculate'
import {actionEqual} from '../actions/calculate'
import {actionReset} from '../actions/calculate'
import {actionDelete} from '../actions/calculate'
import '../App.css';
import '../icon/style.css'




class Calculator extends Component {
  render() {
    return (
      <div>
      
      <div className="d-flex align-items-center h100 ">
        <div className="container w30 bg-grey radius col-md-4">
          <div className="row ">
            <div className="col-12  p-4 text-right font-1 ">{this.props.number}</div>
          </div>
          <div className="row font-1">
            <div className="col-3  p-3 bg-red item" onClick={this.props.sum}><div>+</div></div>
            <div className="col-3  p-3 bg-red item" onClick={this.props.rest}>-</div>
            <div className="col-3  p-3 bg-red item" onClick={this.props.multi}>*</div>
            <div className="col-3  p-3 bg-red item" onClick={this.props.divi}>/</div>
          </div>
          <div className="row font-1">
            <div className="col-4  p-3 item" onClick={this.props.onCapture1}>1</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture2}>2</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture3}>3</div>
          </div>
          <div className="row font-1">
            <div className="col-4  p-3 item" onClick={this.props.onCapture4}>4</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture5}>5</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture6}>6</div>
          </div>
          <div className="row font-1">
            <div className="col-4  p-3 item" onClick={this.props.onCapture7}>7</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture8}>8</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture9}>9</div>
          </div>
          <div className="row font-1">
            <div className="col-4  p-3 item" onClick={this.props.onCaptureReset}>C</div>
            <div className="col-4  p-3 item" onClick={this.props.onCapture0}>0</div>
            <div className="col-4 p-3 item " onClick={this.props.onCaptureDelet}><span className="icon-arrow-left item"></span></div>
          </div>
          <div className="row font-1">
            
            <div className="col-12 p-3 orange item" onClick={this.props.equal}>=</div>
          </div>
        </div>
        <div className="container w30 radius col-md-5 console-style">
        <h2>HISTORIAL</h2>
           <ul className="list">
                  {
                    this.props.historial.map((number, index) =>{
                      return (<li key={index}>{number}</li> )
                    })                
                  }  
           </ul>
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    number: state.number,
    historial: state.historial
  }

}

function mapDispatchToProps(dispatch) {
  return {

    onCapture1: () => {

      dispatch(actionNumber1);
    },
    onCapture2: () => {

      dispatch(actionNumber2);
    },
    onCapture3: () => {

      dispatch(actionNumber3);
    },
    onCapture4: () => {

      dispatch(actionNumber4);
    },
    onCapture5: () => {

      dispatch(actionNumber5);
    },
    onCapture6: () => {

      dispatch(actionNumber6);
    },
    onCapture7: () => {

      dispatch(actionNumber7);
    },
    onCapture8: () => {

      dispatch(actionNumber8);
    },
    onCapture9: () => {

      dispatch(actionNumber9);
    },
    onCapture0: () => {

      dispatch(actionNumber0);
    },

    sum: () => {

      dispatch(actionSum);
    },
    rest: () => {

      dispatch(actionRest);
    },
    multi: () => {

      dispatch(actionMulti);
    },
    divi: () => {

      dispatch(actionDivi);
    },
    equal: () => {

      dispatch(actionEqual);
    },
    onCaptureReset: () => {

      dispatch(actionReset);
    },
    onCaptureDelet: () => {
      dispatch(actionDelete);
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);