const express = require("express");

const books = require("./data/books")

// Init App
const app = express();
/*
    app contains http methods
        app.get()
        app.post()
        app.put()
        app.delete()
*/ 

app.get("/", (req,res) => {
    res.send("Welcome Node Js")
}) /*The client get a request to the server */

app.get("/api/books", (req,res) => {
    res.json(books)
})
// Get Book Method By Id
app.get("/api/books/:id", (req,res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (book) {
        res.status(200).json(book)
        /*
            status 200: status response code from a server for successful HTTP requests from a client (browser). 
            For a web page, it indicates that its HTML code can be loaded successfully. 
            book is exist
        */
    } else {
        res.status(404).json({message: "Book Not Found"})
    }
})




// Running The Server
const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server Is Running On Port ${PORT}`))