import Node from './Node.js';
import LinkedList from './LinkedList.js';


const demoNode = new Node(11);
demoNode.Print();

const myList = new LinkedList();
myList.Print();
myList.Append(demoNode);
myList.Print();

