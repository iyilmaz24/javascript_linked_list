
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

    ToString() {
        let stringRepresentation = "";

        if(this.length == 0) {
            stringRepresentation = 'null';
        }
        else{
            let temp = this.head;
            for(let i = 0; i < this.length; i++) {
                stringRepresentation += `( ${temp.data} ) -> `
                temp = temp.next;
            }
            stringRepresentation += 'null';
        }

        console.log(stringRepresentation);
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

    Prepend(node) {
        if(!this.head) {
            this.head = node;
            if(!this.tail) {
                this.tail = node;
            }
        }
        else {
            node.next = this.head
            this.head = node;
        }
        this.length++;
    }

    Pop() {
        if(this.length == 0){
            console.log("List empty, Pop not possible");
        }
        else if(this.length == 1) {
            console.log("Popped value: " + this.head);
            this.head = null;
            this.tail = null;
        }
        else{
            let prev = this.head;
            let temp = this.head.next;
            while(temp.next) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            console.log("Popped value: " + temp.data);
        }
        this.length--;
    }

    LookUp(index) {
        console.log("Return the node at the given index");
    }

    Contains(value) {
        console.log("Return index of given value if valid else false");
    }

    InsertAt(index) {
        console.log("Insert item at given index");
    }

    RemoveAt(index) {
        console.log("Remove item at given index");
    }

}