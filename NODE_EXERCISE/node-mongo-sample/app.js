console.log('NodeJS Mongo CRUD Operation Sample')
const MongoClient = require('mongodb').MongoClient;

// Mongo DB URL declaration
const url ='mongodb://localhost:27017';

// Mongo DB Name
const dbName = 'companyDB';

MongoClient.connect(url, {useUnifiedTopology: true }, function(err,client){
    
    if(err){
        console.log('Error in connecting to the DB');
        return err;
    }
    console.log('Successfully Connected to DB')
    const db = client.db(dbName);
    client.close();
});
