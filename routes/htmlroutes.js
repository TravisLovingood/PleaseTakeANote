var router = require("express").Router()
var path = require("path")

//for notes. Notes responds with the nothes.html file
router.get("../public/notes", function(req,res){
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

//for indexedDB. Index responds to all other routes
router.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

 module.exports= router;