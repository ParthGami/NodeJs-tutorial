//const fs = require('fs')

//fs.writeFileSync('hello.txt','Hello this is node.js.'
let a = "parth"
//console.log(b)

function f1(){
    return this
}

let b = f1() === globalThis
console.log(b)

arr = [1,2,3,4]
const [ab,bc] = arr;
console.log(ab,bc)