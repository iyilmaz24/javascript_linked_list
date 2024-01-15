
export default class Node {

    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }

    Print() {
        console.log("Data: " + this.data);
        console.log("Next: " + this.next);
    }

    SetNext(nextNode) {
        this.next = nextNode;
    }
    
}