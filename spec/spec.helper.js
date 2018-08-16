const fs = require('fs');       //to read from file system
const chai = require('chai');   //
global.expect = chai.expect;    //global variable called expect, 

let person = fs.readFileSync('./src/js/person.js');
eval( person + `\nexports.Person = Person;`)        //calling method eval. Evaluating the content of person
