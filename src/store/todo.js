import {createStore} from 'redux'

const initialCalculator = {
  number:0,
  historial: [],
  operacion: null
}
switch (action.type){
  case 'NUMBER0':
  return Object.assign({},state, {number : parseInt(state.number+'0')});
  case 'NUMBER1':
  return Object.assign({},state, {number : parseInt(state.number+'1')});
  case 'NUMBER2':
  return Object.assign({},state, {number :parseInt(state.number+'2')});
  case 'NUMBER3':
  return Object.assign({},state, {number : parseInt(state.number+'3')});
  case 'NUMBER4':
  return Object.assign({},state, {number : parseInt(state.number+'4')});
  case 'NUMBER5':
  return Object.assign({},state, {number : parseInt(state.number+'5')});
  case 'NUMBER6':
  return Object.assign({},state, {number : parseInt(state.number+'6')});
  case 'NUMBER7':
  return Object.assign({},state, {number : parseInt(state.number+'7')});
  case 'NUMBER8':
  return Object.assign({},state, {number : parseInt(state.number+'8')});
  case 'NUMBER9':
  return Object.assign({},state, {number : parseInt(state.number+'9')});
  case 'DELETE':
    return Object.assign({},state, {number : 0})
  default : return state;

  return state
}
const store = createStore(reducer);
export default todos