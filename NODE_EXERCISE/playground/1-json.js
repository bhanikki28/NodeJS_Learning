var fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const parseData = JSON.parse(dataJSON);
console.log("Name: " + parseData.name)
console.log("Planet: " + parseData.planet)
console.log("Age: " + parseData.age)
console.log("Setting the name and age")
parseData.name = "Nikki"
parseData.age = "10"

fs.writeFileSync('./1-json.json',JSON.stringify(parseData))
console.log("File overwritten successfully")
 