const numbers = [1,2,3,4,5,6,7,8,9,10]

const double = numbers.map( number => {
    return number=number*2;
})

const evenNumbers = numbers.filter( number => {
    let evenNumber;
    if(number%2 === 0){
        evenNumber = number
    }
    return evenNumber
})

const sum = numbers.reduce((sum,cur) => {
    return sum=sum+cur
},0)

console.log(double) // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]
console.log(evenNumbers) // [ 2, 4, 6, 8, 10 ]
console.log(sum) // 55

