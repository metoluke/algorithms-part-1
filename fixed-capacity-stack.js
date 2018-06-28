
const FixedCapacityStack = (capacity) => {
    const array = new Array(capacity);
    let next = 0;

    return {
        isEmpty() {
            return next === 0;
        },
        
        push(item) {
            array[next++] = item;
        },

        pop() {
            return array[--next];
        }


    };


};


const stack = FixedCapacityStack(5);
console.log("is empty:", stack.isEmpty());
console.log("push!");
stack.push("hello");

console.log("push!");
stack.push("world");

console.log("is empty:", stack.isEmpty());
console.log("pop!!", stack.pop());
console.log("pop!!", stack.pop());
console.log("is empty:", stack.isEmpty());
