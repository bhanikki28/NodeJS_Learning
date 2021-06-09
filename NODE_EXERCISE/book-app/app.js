const express = require('express');
const app = express();
const mongoose = require('mongoose')
// for parsing the post payload, need this bodyParser 
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
const db_name = 'book_repo';
const coll_name = 'books';
const db = mongoose.connect('mongodb://localhost/'+db_name);
const Book = require('./models/bookModel');

// interceptor settings
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const bookRouter = require('./routes/bookRouter')(Book);


// wiring the Router with App 
app.use('/api', bookRouter);



app.listen(port, ()=>{
    console.log('Listening on port '+port);
})