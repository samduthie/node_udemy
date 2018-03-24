const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log("starting app");

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));


var filteredArray = _.uniq([1,2,1, 'test','test']);
console.log(filteredArray);
