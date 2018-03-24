const fs = require('fs');
const os = require('os');

console.log("starting app");
var user = os.userInfo();
var username = user.username
console.log(user.username)

fs.appendFile('greetings.txt', 'Hello ' + username +'!', function (err) { //callback
    if (err) {
        console.log("unable to write to file");
    }
});


console.log(`Hello ${username}!`) //js template string