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
}) /*The client send a request to the server */

app.get("/api/books", (req,res) => {
    res.json(books)
})



// Running The Server
const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server Is Running On Port ${PORT}`))