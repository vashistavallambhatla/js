let globalVar = "Global"

function outerFunction(){

    let outerVar = "Outer"

    function innerFunction(){

        let innerVar = "inner"

        console.log(innerVar) // Accessible since innerVar is declared within innerFunction itself
        console.log(outerVar) // Accessible since outerVar is declared inside outerFunction and can be accessed only within that function and any nested functions (like innerFunction).
        console.log(globalVar) // Can be accessed from anywhere since it is declared in the global scope

        // Important : The scope chain allows innerFunction to access outerVar and globalVar but not vice versa.
    }

    innerFunction() // function is called without any problem

    console.log(innerVar) // Inaccessible. innerVar can only accessed by innerFunction and innerFunction's nested scope
}

outerFunction() // function is called without any problem