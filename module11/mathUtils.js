function add(number1,number2){
    let result = number1+number2;
    return result;
}
function subtract(number1,number2){
    let result = number1-number2;
    return result;
}
function multiply(number1,number2){
    let result = number1*number2;
    return result;
}
function divide(number1,number2){
    if(number2 === 0){
        return `Division by zero is undefined`
    }
    else return number1/number2
}

export {add,subtract,multiply}
export default divide