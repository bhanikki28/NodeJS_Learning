const express = require('express');
const app = express();

function routes(Book){

const bookRouter = express.Router();

bookRouter.route('/books')
    .get( (req,res) => {
        console.log('Get the list of books stored in MongoDB');
        /*
        const books = [{
                 'id':'1','Title':'NodeJS in Action'},
                {'id':'2', 'Title':'GCP Security in Action'}
            ];*/
        Book.find((err,books) =>{
            if(err){
                res.send(err);
            }
            res.json(books)
        })
        //return res.json(books);
    })
    .post( (req,res) => {
        console.log('Post method to store book data');
        const book = new Book(req.body);
        console.log(book)
        return res.json(book)
    });
bookRouter.route('/books/:bookId')
    .get( (req,res) => {
        console.log('Route to get a particular book');
        Book.findById(req.params.bookId, (err,book) =>{
            if(err){
                res.send(err);
            }
            return res.json(book)
        })
    })
    return bookRouter;
}
module.exports = routes;