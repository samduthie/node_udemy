const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log("starting app");
var user = os.userInfo();


var res = notes.addNote();

console.log(res);
console.log('result: ', notes.add(21,4));

// var username = user.username
// console.log(user.username)

// fs.appendFile('greetings.txt', 'Hello ' + username +'! You are ' + notes.age, function (err) { //callback
//     if (err) {
//         console.log("unable to write to file");
//     }
// });


// console.log(`Hello ${username}!`) //js template string