function createNode(v) {
  let value = null;
  if (v !== undefined){
  value = v;
  }
  const next = null;
  return {value, next}
}

function LinkedList() {
  let head = null;
  function addFirst(value){
    this.head = createNode(value);
  }
  function append(value) {
    if (this.head === null) {
      this.addFirst(value);
    } else {
      let node = this.head;
      while(node.next !== null) {
        node = node.next;
      }
      node.next = createNode();
      node.next.value = value;
    }
  }
  function prepend(value) {
    let oldHead = this.head;
    this.addFirst(value);
    this.head.next = oldHead;
  }
  function size() {
    let first = this.head;
    function countNodes(node){
      let count = 0
      if (node === null) {
        return count;
      } else {
        count++
        node = node.next;
        return count + countNodes(node);
      }
    }
    let num = countNodes(first);
    return num;
  }
  return {head, append, prepend, addFirst, size};
}
