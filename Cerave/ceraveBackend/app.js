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

// ---------------------------------------
// external import from others 

// 1. READ FILE
fs.readFile('node.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(data);
})



//  2. WRITE FILE : This method will create a new file or overwrite an existing file.

// Data to be written to the file
const data = 'This is new content for the file.\n';

// Write data to 'node.txt' file
fs.writeFile('node.txt', data, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully.');
});



// 3. UPDATE/APPEND FILE : This method adds content to the end of the file without overwriting existing content.

const additionalData = 'This is additional content.\n';

// Append data to 'node.txt' file
fs.appendFile('node.txt', additionalData, 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended successfully.');
});



// 4. DELETE FILE

// Delete 'node.txt' file
fs.unlink('node.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully.');
});