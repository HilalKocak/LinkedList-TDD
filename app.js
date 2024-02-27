const LinkedList = require('./LinkedList')

const ll = LinkedList.fromValues(10, 20, 30, 40, 50)
ll.print()
// ll.insertAtHead(10)
// ll.insertAtHead(20)

console.log(ll.getByIndex(2))
console.log(ll.getByIndex(3).value)

ll.insertAtIndex(2,60)
ll.print() //10 -> 20 -> 60 -> 30 -> 40 -> null

ll.removeHead() 
ll.print()//20 -> 60 -> 30 -> 40 -> null

ll.removeAtIndex(2)
ll.print()