function createCounter() {
    let count = 0
    
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    }
}

const counter = createCounter();

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
