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
}

function taskScheduler(tasks,callback) {
    for(let i=0;i<tasks.length;i++){
        tasks[i](callback,i+1)
    }
}

taskScheduler(tasks,callback)
