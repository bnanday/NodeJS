
const fs = require('fs');
fs.appendFile('greetings.txt',"hello world", function(err){
    if(err){
        console.log(`This is an error ${err}`);
    }
});

const os = require('os');
var user = os.userInfo();
console.log(`Hello ${user.username}`);



