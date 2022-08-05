
const express = require("express")
app = exppress();

app.get("/", function(req,res){
    res.semd("hola"),
    res.end();
});

//crear: post
//read: get
//uraid: put
//delete: delete

app.listen(7576);