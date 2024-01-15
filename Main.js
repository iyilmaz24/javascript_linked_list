import Node from './Node.js';
import LinkedList from './LinkedList.js';


const demoNode11 = new Node(11);
demoNode11.Print();

const demoNode99 = new Node(99);
demoNode99.Print();

const myList = new LinkedList();
myList.Print();
myList.Append(demoNode11);
myList.Append(demoNode99);
myList.Print();

myList.ToString();