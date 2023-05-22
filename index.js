const express = require("express");

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
})

// Running The Server
const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server Is Running On Port ${PORT}`))