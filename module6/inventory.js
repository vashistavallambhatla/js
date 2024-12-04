const inventory = []

function addProduct (name,price,quantity) {
    let product = {
        name : name,
        price : price,
        quantity : quantity
    }
    inventory.push(product);
}

function removeProduct(name){
    const index = inventory.findIndex(product => product.name === name)
    if(index!==-1){
        inventory.splice(index,1);
    }
}

function updateQuantity(name,quantity){
    inventory.forEach(product => {
        if(product.name===name){
            product.quantity=quantity
        }
    })
}

function calculateTotalValue(){
    let sum=0;
    inventory.forEach(product => sum=sum+product.price)
    return Number(sum)
}


addProduct("Pen",800,10)

console.log(inventory)  

updateQuantity("Pen",20)

console.log(inventory)

removeProduct("Pen")

console.log(inventory)
