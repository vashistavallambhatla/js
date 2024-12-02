import { add, subtract, multiply } from "./mathUtils";
import divide from "./mathUtils";

function calculator(operation,number1,number2){
    let result;

    switch(operation){
        case 'addition' :
            result = add(number1,number2)
            break
        case 'subtraction' :
            result = subtract(number1,number2)
            break
        case 'multiplication' :
            result = multiply(number1,number2)
            break
        case 'division' :
            result = divide(number1,number2)
            break
    }

    return result
}

console.log(calculator('addition',2,2)) // 4
console.log(calculator('subtraction',3,1)) // 2
console.log(calculator('multiplication',3,2)) // 6
console.log(calculator('division',4,2)) // 2
console.log(calculator('division',4,0)) // Division by zero is undefined
console.log(calculator('division',4,3)) // 1.3333333333333333