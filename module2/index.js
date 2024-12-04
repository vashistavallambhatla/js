function variables() {
    {
        var var1=1
        let var2=2
        const var3=3

        console.log(var1) // logs 1
        console.log(var2) // logs 2
        console.log(var3) // logs 3

        var3 = 4; // throws TypeError since you can't reassign to a const variable
    }

    console.log(var1) // logs var1 since it is function scoped,therefore it is accesible
    console.log(var2) // throws ReferenceError since var2 is block scoped
    console.log(var3) // throws ReferenceError since var3 is block scoped
}

/* variables() */

let number = 3
console.log(typeof number) // logs number

let string = "Javascript"
console.log(typeof string) // logs string

let boolean = true
console.log(typeof boolean) // logs boolean

console.log(typeof undefined) // logs undefined

console.log(typeof null) // logs object

let bigNumber = 27n
console.log(typeof bigNumber) // logs bigint

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
// const sym = new Symbol(); // TypeError

console.log(typeof sym1) // logs symbol
console.log(sym2===sym3) // logs false

// FOR NON PRIMITIVE TYPES IN JAVASCRIPT WHICH ARE ARRAYS,OBJECTS,MAPS AND SETS THE TYPE IS "OBJECT"

let object = {name : "Vashista Vallambhatla"}

console.log(object) // logs {name : 'Vashista Vallambhatla'}
console.log(typeof object) // logs object

let array = [1,2,3,4,5]

console.log(array) // logs [1,2,3,4]
console.log(typeof array) // logs object

let map = new Map()
map.set("Vashista","23")

console.log(map) // logs Map(1) { 'Vashista' => '23' }
console.log(typeof map) // logs object

let set = new Set()
set.add("Vashista")
set.add("Vashista")

console.log(set) // logs Set(1) { 'Vashista' }
console.log(typeof set) // logs object

let a = 10;
let b = 5;

let sum = a + b;    // Addition
let diff = a - b;   // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus (remainder of division)

console.log(sum, diff, product, quotient, remainder);

let x = 10;
let y = 20;

console.log(3 == '3');  // Equality (loose) -> logs true
console.log(3 === '3'); // Strict equality
console.log(3 != '3');  // Inequality (loose)
console.log(3 !== '3'); // Strict inequality
console.log(x > y);   // Greater than
console.log(x < y);   // Less than
console.log(x >= y);  // Greater than or equal to
console.log(x <= y);  // Less than or equal to

let c = true;
let d = false;

console.log(c && d); // AND: true if both a and b are true
console.log(c || d); // OR: true if either a or b is true
console.log(!c);     // NOT: negates the value of a


let value = 0; // Falsy values are 0, null, undefined, empty, false or Nan

if (value) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

value = "hello"; // Truthy value are everything that aren't falsy
if (value) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

let first_name = "Vashista"
let last_name = "Vallambhatla"

let result = first_name.concat(" ",last_name)
console.log(result) // logs "Vashista Vallambhatla"

let sliced_string = result.slice(0,9)
console.log(sliced_string) // logs all the character between 0 and 9 (exclusive)

console.log(result.length) // logs 21

