//var server = require("./server")

//server.iniciar(); // en server se exporto la funcion iniciar lo que nos permite iniciar el servidor donde se invoque la funcion




const express = require('express');
const app= express();

app.get("/", function(req,res){
    res.semd("hola"),
    res.end();
});

//crear: post
//read: get
//uraid: put
//delete: delete

app.listen(8520);