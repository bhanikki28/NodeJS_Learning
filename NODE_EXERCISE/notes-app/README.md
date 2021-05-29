// To define a function and export it
## module.exports 
    module.exports been used to export function
    to import a function, const greet = require('./notes.js')


var getNotes = function(msg){
    return 'Hello: ' + msg
}

module.exports = getNotes


## Node Modules

    modules can be imported using require keyword
        1. To import require module, use require('fs')
        2. To import custom module, use require('./pathtomodule/module.js')
    

## Node Monitor

    to monitor the app and to reload the changes without restarting install nodemon
        1. npm install nodemon@2.0.7 -g
        2. start the app nodemon app.js


## NMS Command line args

    process.argv - >  console.log(process.argv)
        eg : node app.js add // console.log(process.argv[2])