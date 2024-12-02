var global = "global_variable"

function func() {
    console.log(global)
    var function_variable = "function_scoped"
    console.log(function_variable) // logs "function_scoped" since function_variable is within the function
    if(true){
        let block_var1=1;
        const block_var2=2;
        console.log(block_var1) // logs 1 since var_1 is within the block
        console.log(block_var2) // logs 2 since var_2 is within the block
    }
    console.log(block_var1) // ReferenceError: block_var1 is not defined since you are trying to access a block scoped variable from outside the block
    console.log(block_var2) // ReferenceError: block_var2 is not defined since you are trying to access a block scoped variable from outside the block
}

console.log(function_variable) // ReferenceError: function_variable is not defined since you are trying to access a function scoped variable from outside the function

func() 