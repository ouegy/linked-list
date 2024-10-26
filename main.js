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
        this.head = new Node(value);
    }
    hasNext(node) {
        if ((node.next = null)) return false;
    }
    traverse(head) {
        while (head.next != null) {
            head = head.next;
        }
        return head;
    }
    prepend(value) {
        const node = new Node(value);
        const next = this.head;
        node.next = next;
        this.head = node;
    }
    size() {
        let count = 0;
        while (this.head != null) {
            this.head = this.head.next;
            count++;
        }
        console.log(count);
        return count;
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

list.size();

console.log(list);
