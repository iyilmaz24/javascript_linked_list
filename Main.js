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