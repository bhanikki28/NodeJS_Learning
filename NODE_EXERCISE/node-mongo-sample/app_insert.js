const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')
const db_url = 'mongodb://localhost:27017'
const db_name = 'companyDB'

console.log('Create Demo')

MongoClient.connect(db_url , {} , function(err,client){
    if(err){
        console.log('Error in connecting to MongoDB')
    }
    console.log('Connected Successfully to DB')
    const db = client.db(db_name);
    insertDocuments(db,function(){
        client.close();
    });
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('emplyees');
    // Insert some documents
    collection.insertMany([


      {id : 1, "Name":"Employee 1"},
      {id : 2, "Name":"Employee 2"}, 
      {id : 3, "Name":"Employee 3"},
      {id : 4, "Name":"Employee 4"},
      {id : 5, "Name":"Employee 5"},


    ], 
    function(err, result) {
      assert.equal(err, null);
      assert.equal(5, result.result.n);
      assert.equal(5, result.ops.length);
      console.log("Inserted 5 employee details into the collection");
      callback(result);
    });
  }