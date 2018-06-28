
const LinkedListOfStrings = () => {

    let first;

    return {
      isEmpty() {
        return first == undefined; 
    },

      push(item) {
        let oldFirst = first;
        first = {
            item,
            next: oldFirst
        }; 
    },

    pop() {
        item = first.item;
        first = first.next;
        return item;
    }
};

 };


const list = LinkedListOfStrings();
console.log("is empty:", list.isEmpty());
console.log("push!");
list.push("hello");

console.log("push!");
list.push("world");

console.log("is empty:", list.isEmpty());
console.log("pop!!", list.pop());
console.log("pop!!", list.pop());
console.log("is empty:", list.isEmpty());

