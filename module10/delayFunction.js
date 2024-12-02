function delay(milliseconds){
    return new Promise((resolve) => setTimeout(resolve,milliseconds))
}

delay(1000).then(() => {
    console.log("This message is being printed after 1 second")
})


  