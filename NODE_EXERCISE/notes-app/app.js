const fs = require('fs')
const greet = require('./notes.js')
const chalk = require('chalk')
console.log('File writing app');
//fs.writeFileSync('./notes.txt','My name is Nikki');
//fs.appendFileSync('./notes.txt','\n I am going to Ormond Primary School');

var result = greet('Nikki')
console.log(chalk.bold.blue(result))
console.log(process.argv)
if(process.argv[2] === 'add'){
    console.log('Add Notes')
}