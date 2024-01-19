
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
            console.log("List Currently Empty!");
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
            console.log("List Empty, Pop Not Possible");
        }
        else if(this.length == 1) {
            console.log("Popped Value: " + this.head);
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
            console.log("Popped Value: " + temp.data);
            this.tail = prev;
        }
        this.length--;
    }

    LookUp(index) {
        if(index > this.length - 1){
            console.log(`Index (${index}) Out of Range`)
        }
        else {
            let temp = this.head
            for(let i = 0; i != index; i++) {
                temp = temp.next
            }
            console.log(`Index ${index}: ( ${temp.data} )`)
        }
    }

    Contains(value) {
        let temp = this.head;
        for(let i = 0; i < this.length; i++) {
            console.log(i)
            if(temp.data == value) {
                console.log(`Value Found at Index (${i})`);
                return
            }
            temp = temp.next
        }
        console.log("Value Does Not Exist")
    }

    InsertAt(index, newNode) {
        if(index == this.length) {
            this.Append(newNode)
            return
        }

        if(index > this.length) {
            console.log("Insert Index Out of Range")
            return
        }

        if(index == 0) {
            this.Prepend(newNode)
            return
        }

        let temp = this.head
        let prev = null
        for(let i = 0; i != index; i++) {
            prev = temp
            temp = temp.next
        }
        prev.next = newNode
        newNode.next = temp
        this.length++;
    }

    RemoveAt(index) {
        if(index == this.length - 1) {
            this.Pop()
            return
        }

        if(index > this.length - 1) {
            console.log("Remove Index Out of Range")
            return
        }

        if(index == 0) {
            let temp = this.head.next
            this.head.next = null
            this.head = temp
            this.length--;
            return
        }

        let prev = null
        let temp = this.head
        for(let i = 0; i != index; i++) {
            prev = temp
            temp = temp.next
        }
        prev.next = temp.next
        temp.next = null
        this.length--;
    }

}