var router = require("express").Router()
var path = require("path")

//for notes.html file
router.get("../public/notes", function(req,res){
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

//for indexedDB.
router.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

 module.exports= router;