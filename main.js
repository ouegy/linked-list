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
    }

    getHead() {
        let head = this.head;
        console.log(head);
        return head;
    }
}

let list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("chicken");

list.tail();
list.getHead();
list.size();

console.log(list);
