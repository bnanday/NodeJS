
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();

var filteredArray = _.uniq([1,1,2,3,4,5,2,3,4]);

console.log(filteredArray);

// fs.appendFile('greetings.txt',`Hello world ${user.username}`, function(err){
//     if(err){
//         console.log(`This is an error ${err}`);
//     }
// });

var res = notes.addNote();
var add = notes.add(1,3);
console.log(add);
//console.log(res);






