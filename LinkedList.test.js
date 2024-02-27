const LinkedList = require('./LinkedList')

describe('#insertAtHead', ()=> {
    test('it adds the element to the beginning of the list', ()=> {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)
    
        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
  
})

describe('getByIndex', ()=> {
    describe('with index less than 0', ()=> {
        test('it returns null', ()=> {
            const ll = new LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index greater than list length', ()=> {
        test('it returns null', ()=> {
            const ll = new LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(5)).toBeNull()
        })
    })
    
    describe('with index 0', ()=> {
        test('it returns the head', ()=> {
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(0).value).toBe(10)
        })
    })
    
    describe('with index in the middle', ()=> {
        test('it returns the element at that index', ()=> {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            expect(ll.getByIndex(2).value).toBe(30)
        })
    })


})

describe('#insertAtIndex', ()=> {
    describe('with index less than 0', ()=> {
        test('it does not insert anyhing',()=> {
            const ll = LinkedList.fromValues(10,20)
            ll.inserAtIndex(-1, 30)
            expect(ll.length).toBe(2)
        })
        
    })


    describe('with index greater than list length', ()=> {
        test('it does not insert anyhing',()=> {
            const ll = LinkedList.fromValues(10,20)
            ll.inserAtIndex(5, 30)
            expect(ll.length).toBe(2)
        })
        
    })

    describe('with index 0', ()=> {
        test('insert at the head',()=> {
            const ll = LinkedList.fromValues(10,20)
            ll.inserAtIndex(0, 30)
            expect(ll.length).toBe(3)
            expect(ll.head.value).toBe(30)
            expect(ll.head.next.value).toBe(20)
        })
        
    })

        
    describe('with index in the middle', ()=> {
        test('insert at given index', ()=> {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.inserAtIndex(2, 50)
            const node = ll.getByIndex(2)

            expect(ll.length).toBe(5)
            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
        })
    })
})

describe('#removeHead', () => {
    test('removes head', ()=> {
        const ll = LinkedList.fromValues(10, 20, 30)
        ll.removeHead()
        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(30)
        expect(ll.length).toBe(2)
    })
})