let tasks = []

function task1(callback,i) {
    console.log(`Task${i} started`)
    setTimeout(() => {
        callback(i);
    },1000)
}

function task2(callback,i) {
    console.log(`Task${i} started`)
    setTimeout(() => {
        callback(i)
    },5000)
}

function task3(callback,i) {
    console.log(`Task${i} started`)
    setTimeout(() => {
        callback(i)
    },3000)
}


tasks.push(task1)
tasks.push(task2)
tasks.push(task3)

function callback(i){
    console.log(`task${i} completed!`)
    if(checkIndex(i+1)) taskScheduler(i+1,tasks)
}

function checkIndex(i){
    if(i<tasks.length) return true
    else return false
}

function taskScheduler(i,tasks) {
    tasks[i](callback,i)
}

taskScheduler(0,tasks,callback)
