const fs = require('fs');
const path = require('path');

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return note;
};

function deleteNote(id, notes) {
    let newNotes = [];

    for(i = 0; i < notes.length; i++) {
        if (notes[i].id !== id) {
            newNotes.push(notes[i]);
        }
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNotes, null, 2)
    );

    return newNotes;
};

module.exports = {addNote, deleteNote};