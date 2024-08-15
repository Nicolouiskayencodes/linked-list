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
    head = createNode(value);
  }
  function append(value) {
    if (head === null) {
      addFirst(value);
    } else {
      let node = head;
      while(node.next !== null) {
        node = node.next;
      }
      node.next = createNode();
      node.next.value = value;
    }
  }
  function prepend(value) {
    let oldHead = head;
    addFirst(value);
    head.next = oldHead;
  }
  function size() {
    let first = head;
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
  function getHead() {
    return head;
  }
  function getTail() {
    let first = head;
    function goEnd(node) {
      if (node.next === null) {
        return node;
      } else {
        node = node.next;
        return goEnd(node);
      }
    }
    let end = goEnd(first);
    return end;
  }
  function at(index){
    let node = head;
    for (let i=0; i<index;i++) {
      if (node.next === null){
        return "No item at index";
      }
      node=node.next;
    }
    return node;
  }
  function pop() {
    let first = head;
    function goEnd(node) {
      if (node.next.next === null) {
        return node;
      } else {
        node = node.next;
        return goEnd(node);
      }
    }
    let newEnd = goEnd(first);
    newEnd.next = null;
  }
  function contains(value) {
    let first = head;
    function iterate(node) {
      if (node.value === value) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        node = node.next;
        return iterate(node);
      }
    }
    let answer = iterate(first);
    return answer;
  }
  function find(value) {
    let first = head;
    function iterate(node) {
      let count = 0;
      if (node.value === value){
        return count;
      } else if (node.next === null) {
        return -9999999999999999999999;
      } else {
        count +=1;
        node = node.next;
        return count + iterate(node);
      }
    }
    let contained = iterate(first);
    if (contained<0){
      return value + " is not contained"
    }
    return contained;
  }
  function toString() {
    let first = head;
    function iterate(node) {
      if (node.next === null) {
        return "(" + node.value + ") -> null"
      } else {
        let val = node.value;
        node = node.next;
        return "(" + val + ") -> " + iterate(node);
      }
    }
    let string = iterate(first);
    return string;
  }
  function insertAt(value, index){
    let node = head;
    let prev = node;
    if (index === 0) {
      addFirst(value);
      head.next = node;
      return
    }
    if (index > size()){
      return "Index is too large";
    }
    for (i=0; i<index; i++){
      prev = node;
      node = node.next;
    }
    prev.next = createNode(value);
    prev.next.next = node;
  }
  function removeAt(index) {
    let node = head;
    let prev = node;
    if (index === 0) {
      head = head.next;
    }
    if (index > size()){
      return "Index is too large";
    }
    for (i=0; i<index; i++){
      prev = node;
      node = node.next;
    }
    prev.next = node.next;
  }
  return {append, prepend, size, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt};
}


const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());