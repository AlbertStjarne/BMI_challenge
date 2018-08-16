// spec.helper.js

const fs = require('fs');       //to read from file system
const chai = require('chai');   //
global.expect = chai.expect;    //global variable called expect, 

let calc = fs.readFileSync('./src/js/calculator.js');
let person = fs.readFileSync('./src/js/person.js');
eval( calc + person + `\nexports.Person = Person;\nexports.BMICalculator = BMICalculator;`)        //calling method eval. Evaluating the content of person
