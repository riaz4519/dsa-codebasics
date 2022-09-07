class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    let node = new Node(data, this.head);
    this.head = node;
  }

  print() {
    if (!this.head) {
      console.log("LinkedList is empty");
      return;
    }

    let itr = this.head;
    let listr = "";

    while (itr) {
      listr += itr.data.toString() + "-->";
      itr = itr.next;
    }

    console.log(listr);
  }
  insertAtEnd(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }

    let itr = this.head;
    while (itr.next) {
      itr = itr.next;
    }

    itr.next = new Node(data, null);
  }

  insertValues(dataList) {
    this.head = null;

    for (let data of dataList) {
      this.insertAtEnd(data);
    }
  }

  getLength() {
    let count = 0;
    let itr = this.head;

    while (itr) {
      itr = itr.next;
      count++;
    }

    return count;
  }

  removeAt(index) {
    if (index < 0 || index >= this.getLength()) {
      console.log("Invalid index");
      return;
    }

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let itr = this.head;

    while (itr) {
      if (count == index - 1) {
        itr.next = itr.next.next;
        break;
      }

      itr = itr.next;
      count++;
    }
  }

  insertAt(index, data) {
    if (index < 0 || index > this.getLength()) {
      console.log("Invalid index");
      return;
    }

    if (index == 0) {
      this.insertAtBeginning(data);
      return;
    }

    let count = 0;
    let itr = this.head;

    while (itr) {
      if (count == index - 1) {
        let node = new Node(data, itr.next);

        itr.next = node;
        break;
      }

      itr = itr.next;
      count++;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertValues([1, 2, 3, 4, 5]);
linkedList.print();
linkedList.removeAt(2);
linkedList.print();
linkedList.insertAt(1, "one");
linkedList.print();
console.log(linkedList.getLength());
