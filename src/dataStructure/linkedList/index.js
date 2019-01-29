'use strict';

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.add = function (data) {
  var nodeToAdd = new Node(data);
  var nodeToCheck = this.head;

  if(!nodeToCheck){
    this.head = nodeToAdd;
    this.length += 1;
    return nodeToAdd;
  }
  while(nodeToCheck.next){
    nodeToCheck = nodeToCheck.next;
  }
  nodeToCheck.next = nodeToAdd;
  this.length +=1;
  return nodeToAdd;
};

LinkedList.prototype.get = function (index) {
  var count = 0;
  var targetNode = this.head;

  if(index >= this.length) return 'Not Found Node';
  while(count < index){
    targetNode = targetNode.next;
    count+=1;
  }
  return targetNode;
};

LinkedList.prototype.remove = function (index) {
  var nodeToCheck = this.head;
  var length = this.length;
  var conunt = 0;
  var prevNode = null;

  if(index >= length) return 'Not Found Node';

  if(index === 0){
    this.head = nodeToCheck.next;
    this.length-=1;
    return this.head;
  }

  while(count < index){
    prevNode = nodeToCheck;
    nodeToCheck = nodeToCheck.next;
    count +=1;
  }
};

var ll = new LinkedList();

ll.add('a'); //1
ll.add('b'); //2
ll.add('c'); //3
ll.add('d'); //4
ll.add('e'); //5

// console.log(ll.get(4));
console.log(ll);
