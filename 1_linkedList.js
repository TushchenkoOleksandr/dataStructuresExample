console.log('linked list')
class LinkedList {
  constructor() {
    this.root = null;
  }

  addInTail(value) {
    const newListItem = new LinkedListItem();
    newListItem.setValue(value);

    if (!this.root) {
      this.root = newListItem;
    } else {
      let item = this.root;
      while (item.link) {
        item = item.link;
      }
      item.setLink(newListItem);
    }
  }

  addInHead(value) {
    const newFirstListItem = new LinkedListItem();
    newFirstListItem.setValue(value);

    if (!this.root) {
      this.root = newListItem;
    } else {
      let firstItem = this.root;
      newFirstListItem.setLink(firstItem);
      this.root = newFirstListItem;
    }
  }

  showList() {
    let item = this.root;
    let list = [];
    while (item) {
      list.push(item.value);
      item = item.link;
    }
    return list;
  }
}

class LinkedListItem extends LinkedList {
  constructor() {
    super();
    this.value = null;
    this.link = null;
  }

  setValue(value) {
    this.value = value;
  }

  setLink(link) {
    this.link = link;
  }

  getValue() {
    return this.value;
  }

  getLink() {
    return this.link;
  }
}

const linkedList = new LinkedList();

linkedList.addInTail(1);
linkedList.addInTail(2);
linkedList.addInTail(3);
linkedList.addInTail(4);
linkedList.addInTail(5);

console.log(linkedList.showList());

linkedList.addInHead(0);
linkedList.addInHead(-1);
linkedList.addInHead(-2);
linkedList.addInHead(-3);
linkedList.addInHead(-4);

console.log(linkedList.showList());
