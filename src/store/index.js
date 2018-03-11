import {createStore } from 'redux';

// Estados Iniciales
const initialState = {
number : 0,
numberCalculator :0,
operator:null,
};

// Reducer
const reducer =  (state = initialState,action) =>{
  console.log(action.type);
    switch (action.type){
 
        case 'NUMBER_1' : 
        return Object.assign({},state,{ number : parseInt(state.number+'1')   });
        case 'NUMBER_2' : 
        return Object.assign({},state,{ number :parseInt(state.number+'2')   });
        case 'NUMBER_3' : 
        return Object.assign({},state,{ number :parseInt(state.number+'3')   });
        case 'NUMBER_4' : 
        return Object.assign({},state,{ number :parseInt(state.number+'4' )  });
        case 'NUMBER_5' : 
        return Object.assign({},state,{ number :parseInt(state.number+'5')   });
        case 'NUMBER_6' : 
        return Object.assign({},state,{ number :parseInt(state.number+'6' )  });
        case 'NUMBER_7' : 
        return Object.assign({},state,{ number :parseInt(state.number+'7' )  });
        case 'NUMBER_8' : 
        return Object.assign({},state,{ number :parseInt(state.number+'8' )  });
        case 'NUMBER_9' : 
        return Object.assign({},state,{ number :parseInt(state.number+'9')   });
        case 'NUMBER_0' : 
        return Object.assign({},state,{ number :parseInt(state.number+'0')   });
        case 'SUM' : 
        return Object.assign({},state,{ numberCalculator: state.number,
                                        number:0,operator:'+' });
        case 'REST' : 
        return Object.assign({},state,{ numberCalculator: state.number,
                                        number:0,operator:'-' });
        case 'MULTI' : 
        return Object.assign({},state,{ numberCalculator: state.number,
                                        number:0,operator:'*' }); 
        case 'DIVI' : 
        return Object.assign({},state,{ numberCalculator: state.number,
                                        number:0,operator:'/' });                               
        case 'EQUAL' : 
        return Object.assign({},state,{ number:opera(state.numberCalculator,state.number,state.operator) });
        
        case 'RESET' : 
        return Object.assign({},state,{ number:0 });
       
        
        default : 
        return state;
    }
    return state;
}

function opera(num1,num2,operator){
    switch (operator){
        case '+' :
        return num1 + num2;
        case '-' :
        return num1 - num2;
        case '*' :
        return num1 * num2;
        case '/' :
        if(num2!==0){
          return num1 / num2;
        }else{
          return 0;
        }
        
        default :
        return num1;
    }

}

const store = createStore(reducer);

export default store;