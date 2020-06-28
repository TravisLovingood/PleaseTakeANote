const router = require("express").Router()
var path = require("path")
const store = require("../db/store.js")

router.get("/notes", function(req,res){
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
})

router.post("/notes", function(req,res){
    store
        .addNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
})

router.delete("/notes", function(req,res){
    store
        .removeNote(req.params.id)
        .then( () => res.json({ok: true}))
        .catch(err => res.status(500).json(err));
});

 module.exports= router;
