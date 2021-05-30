const fs = require('fs')
const greet = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
console.log('File writing app');
//fs.writeFileSync('./notes.txt','My name is Nikki');
//fs.appendFileSync('./notes.txt','\n I am going to Ormond Primary School');

var result = greet('Nikki')
console.log(chalk.bold.blue(result))
/*
console.log(process.argv) 
if(process.argv[2] === 'add'){
    console.log('Add Notes')
}*/


yargs.command({
    command: 'add',
    describe: 'To add notes',
    builder: {
        title: {
            describe : 'Notes title',
            demandOption : true,
            type : 'string'
        },
        body: {
            describe : 'Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function(argv){
        console.log('Command to add Notes'+ argv.title)
    }
})

yargs.parse();
console.log(yargs.argv)