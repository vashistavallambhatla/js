/*
1. Pending:

The promise is still in progress and has not been fulfilled or rejected. It waits for the asynchronous operation to complete.

2. Fulfilled:

The promise has successfully completed its operation. It resolves with a value, signaling the success of the operation.

3. Rejected:

The promise has failed, usually due to an error. It returns a reason or error object to indicate the failure.
*/


function delayedLowerCase(string){
    return new Promise((resolve) => {
        setTimeout(() => {
            let lowerCaseString = string.toLowerCase()
            resolve(lowerCaseString)
        }, 5000);
    })
}

delayedLowerCase("VASHISTA").then((lowerCaseString) => {
    console.log(lowerCaseString)
    return lowerCaseString.length
}).then((length) => {
    console.log(`The string's length is ${length}`);
}).catch(error => {
    console.log(error)
}) 