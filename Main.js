import Node from './Node.js';
import LinkedList from './LinkedList.js';


const demoNode11 = new Node(11);
demoNode11.Print();

const demoNode99 = new Node(99);
demoNode99.Print();

const demoNode101 = new Node(101);
demoNode101.Print();

const myList = new LinkedList();
myList.Print();
myList.Append(demoNode11);
myList.Append(demoNode99);
myList.Prepend(demoNode101);
myList.Print();

myList.ToString();

// myList.Pop();
myList.ToString();

// myList.LookUp(0);
// myList.LookUp(1);
// myList.LookUp(2);
// myList.LookUp(9);

myList.Contains(99);
myList.Contains(10);

const demoNode40 = new Node(40);
const demoNode88 = new Node(88);
const demoNode2 = new Node(2);

myList.InsertAt(3, demoNode40);
myList.InsertAt(0, demoNode88);
myList.InsertAt(2, demoNode2);
myList.ToString();
myList.LookUp(4);

myList.RemoveAt(2);
myList.RemoveAt(10);
myList.ToString();

const demoNode55 = new Node(55);
myList.InsertAt(5, demoNode55);
myList.ToString();
myList.Print();

myList.RemoveAt(5);
myList.ToString();
myList.RemoveAt(2);
myList.ToString();
myList.Print();