import {createStore } from 'redux';

// Estados Iniciales
const initialState = {
number : 0,
numberCalculator :0,
operator:null,
historial:[],
};

// Reducer
const reducer =  (state = initialState,action) =>{
  console.log(action.type);
    switch (action.type){
 
        case 'NUMBER_1' : 
        return { ...state , number :parseInt(state.number+'1') } ;
        case 'NUMBER_2' : 
        return { ...state , number :parseInt(state.number+'2') };
        case 'NUMBER_3' : 
        return { ...state , number :parseInt(state.number+'3') };
        case 'NUMBER_4' : 
        return { ...state , number :parseInt(state.number+'4') };
        case 'NUMBER_5' : 
        return { ...state , number :parseInt(state.number+'5') };
        case 'NUMBER_6' : 
        return { ...state , number :parseInt(state.number+'6') };
        case 'NUMBER_7' : 
        return { ...state , number :parseInt(state.number+'7') };
        case 'NUMBER_8' : 
        return { ...state , number :parseInt(state.number+'8') };
        case 'NUMBER_9' : 
        return { ...state , number :parseInt(state.number+'9') };
        case 'NUMBER_0' : 
        return { ...state , number :parseInt(state.number+'0') };
        case 'SUM' : 
        return { ...state,numberCalculator: state.number,
                                        number:0,operator:'+',historial:historial(state.number,state.historial)  };
        case 'REST' : 
        return { ...state,numberCalculator: state.number,
                                        number:0,operator:'-',historial:historial(state.number,state.historial) };
        case 'MULTI' : 
        return { ...state,numberCalculator: state.number,
                                        number:0,operator:'*',historial:historial(state.number,state.historial) }; 
        case 'DIVI' : 
        return { ...state,numberCalculator: state.number,
                                        number:0,operator:'/',historial:historial(state.number,state.historial) };                               
        case 'EQUAL' : 
        return { ...state,number:opera(state.numberCalculator,state.number,state.operator) ,historial:historial(state.number,state.historial)};
        
        case 'RESET' : 
        return { ...state,number:0   };
        
        case 'DELETE':
        return {...state,number:deleteNum(state.number)};
       
               
        default : 
        return state;
    }
    return state;
}

function opera(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return 0;
      }

    default:
      return num1;
  }

}

function historial(num, array) {

  let arrayHistorial = array;
  arrayHistorial.push(num);
  console.log(arrayHistorial);
  return arrayHistorial

}

function deleteNum(num) {
  let number = num.toString()
  if (number.length > 1) {
    let arrayNumber = Array.from(number);
    arrayNumber.splice(arrayNumber.length - 1, 1)
    let preNumber = arrayNumber.join('')
    return parseInt(preNumber)
  } else {
    return 0
  }
}


const store = createStore(reducer);

export default store;