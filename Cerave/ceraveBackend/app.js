// // import syntax
// const math = require('./math.js');
// const fs = require('fs');

// // using custom import
// let sum = math.add(10,2);
// console.log(sum)

// let multiplication = math.mul(10,2);
// console.log(multiplication)

// let substraction = math.sub(10,2);
// console.log(substraction)

// let division = math.div(10,2);
// console.log(division)

// // ---------------------------------------
// // external import from others 

// // 1. READ FILE
// fs.readFile('node.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log(data);
// })



// //  2. WRITE FILE : This method will create a new file or overwrite an existing file.

// // Data to be written to the file
// const data = 'This is new content for the file.\n';

// // Write data to 'node.txt' file
// fs.writeFile('node.txt', data, 'utf8', (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully.');
// });



// // 3. UPDATE/APPEND FILE : This method adds content to the end of the file without overwriting existing content.

// const additionalData = 'This is additional content.\n';

// // Append data to 'node.txt' file
// fs.appendFile('node.txt', additionalData, 'utf8', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }
//     console.log('Content appended successfully.');
// });



// // 4. DELETE FILE

// // Delete 'node.txt' file
// fs.unlink('node.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully.');
// });



// HTTP MODEL - Creating Server!!!

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write('Hello world');
//     res.end();

// });

// server.listen(3000, () => {
//     console.log('Server is running!');
// })


// EXPRESS MODEL - Creating Server!!!
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World - by ruchi');
// })

// const users =[ 
//     {id : 1, name:'Rakesh Shah' },
//     {id : 2, name:'Ahdal Rana Shah' },
//     {id : 3, name:'Kanalika Shahendra Bahadur' }
// ]

// very lightweight data is json so easy to circulate in internet json is a data ko type. only diff betn object and json is cotation in key 
// authentication means user is logged in
// authorization means access for users (features) and access for admin (features)


// params: get data acc to id from url 
// app.get('/getUsers/:id',(req,res)=> {
//     const id = parseInt(req.params.id);
//     const user = users.find(user => user.id === id);
//     if(user){
//         res.json(user);
//     }else{
//         res.status(404).send('User not found')
//     }
// })

// app.listen(port, ()=>{
//     console.log(`Server is running on the port ${port}`);
// })

// app.get('/getUsers', (req, res) => {
//     res.json(students);
// })


// const students = [
//     {   
//         "name": "John",
//         "age": 30,
//         "isStudent": false,
//         "hobbies": ["reading", "swimming", "coding"],
//         "address": {
//             "street": "123 Main St",
//             "city": "Anytown",
//             "country": "USA",
//         },
//         "favoriteNumber": [7, 2 , 9],
//         "status": null
//     }
// ]

// params: get data acc to id from url 
// app.get('/getUsers/:name',(req,res)=> {
//     const name = req.params.name;
//     const student = students.find(student=>student.name===name);
//     if(student){
//         res.json(student);
//     }else{
//         res.status(404).send('User not found')
//     }
// })

// app.listen(port, ()=>{
//     console.log(`Server is running on the port ${port}`);
// })


// not efficient way to use it:
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/Cerave')
//   .then(() => console.log('Connected!'));


// -------------------------------------MONGOOSE NODE JS START----------------------

const express=require('express');
const connectDB = require('./src/config/db');
const userProfileRoutes =require('./src/routes/userProfileRoutes')
const authRoutes =require('./src/routes/authRoutes')
// from express
const app=express();
const port=5000;
connectDB();




//import env
require("dotenv").config();
app.use(express.json()); 

app.use('/user', userProfileRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});



