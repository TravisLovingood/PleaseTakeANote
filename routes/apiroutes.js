const router = require("express").Router()
const store = require("../db/store.js")
// var path = require("path")
//gets all notes
router.get("/notes", function(req, res){
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
})
// add note
router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
})

//deletes the note
router.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then( () => res.json({ok: true}))
        .catch(err => res.status(500).json(err));
});

 module.exports= router;