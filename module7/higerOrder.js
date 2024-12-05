function createStepIterator(start, end, step) {
  let currentValue = start;
  
  // Custom iterator object
  return {
    next() {
      if (currentValue <= end) {
        let value = currentValue;
        currentValue += step;
        return { value, done: false };
      }
      return { done: true };
    },

    // Method to return the whole array using the iterator
    collect() {
      let result = [];
      let current = this.next();
      while (!current.done) {
        result.push(current.value);
        current = this.next();
      }
      return result;
    }
  };
}

// Example usage
const iterator = createStepIterator(1, 10, 2);
console.log(iterator.collect()); // Output: [1, 3, 5, 7, 9]
