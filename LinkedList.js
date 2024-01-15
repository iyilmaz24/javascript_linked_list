
export default class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Print() {
        if(this.length > 0) {
            console.log("Head: " + this.head.data);
            console.log("Tail: " + this.tail.data);
            console.log("Length: " + this.length);
        }
        else {
            console.log("List currently empty!");
        }

    }

    Append(node) {
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    InsertAt(index) {
        console.log("Insert item at given index");
    }

    RemoveAt(index) {
        console.log("Remove item at given index");
    }

}