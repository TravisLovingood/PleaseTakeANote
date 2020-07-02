const util = require("util");
const fs = require("fs");
// Package to create ids
var uuid = require('uuid');
const uuidv1 = require("uuid/v1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("db/db.json","utf8");
    }
    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes) => {
            let parsedNotes;
            try{
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err){
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
    addNote(note){
        const {title, text} = note;
        if (!title || !test){
            throw new Error("Hey no blank notes!");
        }
        const newNote = {title, text, id:uuidv1()};
          //get all notes, add the one with that id, and re write all notes
        return this.getNotes()
        // Spread attributes ( ... ) to call the previous notes
        .then((notes) =>[...notes,newNote] )
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }

    removeNote(id){
        //get all notes, remove the one with that id, and re write the other ones
        return this.getNotes()
            .then((notes) => notes.filter((note)=>Node.id !== id))
            .then((filteredNotes)=> this.write(filteredNotes));
    }
}

module.exports = new Store();