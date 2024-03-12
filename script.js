//<
function displayScreen(num){
      //13++ invalid
      //13+5 valid
    let operatorArray=['+','-','.','/','*']
    let lastChar=root.value.slice('-1') //taking last charcter of what we typed
    if(operatorArray.includes(lastChar) && operatorArray.includes(num)){
        return root.value='invalid'
    }
    else{
         //13+5 valid
        root.value+=num //concat add to string
    }
    
    
}

function clearBox(){
    root.value='' //clear it
}


//eval(expression) defined default js funtion
//The eval() function evaluates JavaScript code represented as a string and returns its completion value. 

function evaluateExpression(){
    let curExpression=root.value;
    let result=eval(curExpression)
    root.value=result
}


function backSpace(){
    let currentValue=root.value; //123
    let newValue=currentValue.slice(0,-1) //this won't take last digit/numbeer
    root.value=newValue
}