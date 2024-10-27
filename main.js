class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    append(value) {
        if (this.head == null) this.addFirst(value);
        else {
            let node = this.traverse(this.head);
            node.next = new Node(value);
        }
    }
    addFirst(value) {
        this["head"] = new Node(value);
    }
    hasNext(node) {
        if ((node.next = null)) return false;
    }
    traverse(head) {
        let tail;
        while (head.next != null) {
            head = head.next;
        }
        tail = head;
        return tail;
    }
    prepend(value) {
        const node = new Node(value);
        const next = this.head;
        node.next = next;
        this.head = node;
    }
    size() {
        let count = 0;
        let head = this.getHead();
        while (head.next != null) {
            head = head.next;
            count++;
        }
        console.log(count);
        return count;
    }
    tail() {
        let tail = this.traverse(this.head);
        console.log(tail);
        return tail;
    }
    getHead() {
        let head = this.head;
        console.log(head);
        return head;
    }
    at(index) {
        if (index == 0) return;
        if (index == 1) return this.getHead();
        let head = this.getHead();
        for (let i = 0; i < index; i++) {
            head = head.next;
        }
        console.log(head);
        return head;
    }
    pop() {
        let size = this.size();
        let secondLast = this.at(size - 1);
        secondLast.next = null;
    }
    contains(val) {
        let head = this.head;
        while (head.next != null) {
            let value = head.value;
            if (value == val) {
                console.log("value: " + value);
                return true;
            }
            head = head.next;
        }
        return false;
    }
    find(val) {
        let head = this.head;
        let index = 0;
        while (head.next != null) {
            let value = head.value;

            if (value == val) {
                console.log("value: " + value);
                return index;
            }
            index++;
            head = head.next;
        }
    }
    toString() {
        let head = this.head;
        let result = `( ${head.value} )`;
        for (let i = 1; i < this.size(); i++) {
            result += ` => ( ${head.next.value} )`;
            head = head.next;
        }
        return result;
    }
}

let list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log(list.find("snake"));

console.log(list.contains("foo"));

list.prepend("chicken");

list.tail();
list.pop();
list.size();
list.pop();
list.size();

console.log(list);
