### Mongo DB Installation #######

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

brew tap mongodb/brew

brew install mongodb-community@4.4

brew services start mongodb-community@4.4
brew services stop mongodb-community@4.4


### NPM Installation MongoDB

npm install mongodb --save
mongod --dbpath=/data


### Connect to MongoDB

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, {useUnifiedTopology: true }, function(err,client){
    
    if(err){
        console.log('Error in connecting to the DB');
        return err;
    }
    console.log('Successfully Connected to DB')
    const db = client.db(dbName);
    client.close();
});


### References #####

https://www.learnsimpli.com/crud-operations-in-nodejs-with-mongodb/
