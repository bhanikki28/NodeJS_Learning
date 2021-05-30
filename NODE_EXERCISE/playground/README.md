##  NodeJS working with JSON

        http://links.mead.io/json-sample
        JSON.stringify() // to stringify the json data
        JSON.parse()
        eg :
        const dataBuffer = fs.readFileSync('fileName')
        const dataString = dataBuffer.toString()
        const JSONData = JSON.parse(dataString)
        const field_value = JSONData.property