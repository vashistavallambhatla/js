const stepArray = function(start,end,step,func){
    let result = [];
    result.push(start);
    let i = start;
    while(true){
        i=func(i,step);
        if(i<=end) result.push(i);
        else break;
    }
    return result
}

function step_generate(number,step){
    return number+step;
}

console.log(stepArray(0,10,3,step_generate))