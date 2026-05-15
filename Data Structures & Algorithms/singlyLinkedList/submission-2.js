class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head=null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head;
    let i = 0;
    while (current) {
      if (i === index) return current.value;
      current = current.next;
      i++;
    }
    return -1;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newnode= new Node(val);
        newnode.next = this.head;
        this.head = newnode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {let newnode = new Node(val);
        if(!this.head){
            this.head = newnode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newnode;
        }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(this.head === null){
            return false;
        }
        if(index==0){

        }
        let i = 0;
        let current = this.head;
        if(index===0){
            this.head = this.head.next;
            return true;
        }
        while (current && i < index-1){
            current = current.next;
            i++;
        }

        if(!current || !current.next){return false;}
        current.next = current.next.next;
        return true;
            }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
}}
