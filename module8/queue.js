class Queue {
    #head;
    #tail;

    constructor(max_size){
        this.max_size=max_size
        this.size=0;
    }


    enqueue(val) {
        if(this.isFull()){
            console.log("The queue is full");
        }

        let node = new Node(val);

        if(this.isEmpty()){
            this.#head=node
            this.#tail=node
        }
        else {
            this.#tail.next=node
            node.prev=this.#tail
            this.#tail=node
        }
        this.size++
        console.log(`${val} is enqueued!`)
    }

    dequeue() {
        if(this.isEmpty()){
            console.log("The Queue is empty!")
            return null;
        }
        let cur_head = this.#head
        this.#head = this.#head.next

        if(this.#head!==null){
            this.#head.prev=null
        }

        this.size--

        console.log(`${cur_head.val} is dequeued!`)

        if(this.size===0){
            this.#tail=null
        }

        return cur_head
    }

    front() {
        if(this.isEmpty()){
            console.log("The Queue is empty!")
            return null
        }
        else{
            return this.#head;
        }
    }

    isEmpty(){
        if(this.size === 0){
            return true;
        } else return false;
    }

    isFull() {
        if(this.size>=this.max_size){
            return true;
        } else return false;
    }
}

class Node {
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}


let q = new Queue(3);

q.enqueue(10); // 10 is enqueued!
q.enqueue(20); // 20 is enqueued!
q.enqueue(30); // 30 is enqueued!
q.enqueue(40); // The queue is full

console.log(q.front()); // 10

q.dequeue(); // 10 is dequeued!
q.dequeue(); // 20 is dequeued!
q.dequeue(); // 30 is dequeued!
q.dequeue(); // The Queue is empty!
