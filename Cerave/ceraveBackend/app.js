// import syntax
const math = require('./math.js');
const fs = require('fs');

// using custom import
let sum = math.add(10,2);
console.log(sum)

let multiplication = math.mul(10,2);
console.log(multiplication)

let substraction = math.sub(10,2);
console.log(substraction)

let division = math.div(10,2);
console.log(division)

// external import from others 
fs.readFile('node.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(data);
})

// HW: write update delete - CRUD 

