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
    const deleted = notes.findIndex(n => n.id === id);

    notes.splice(deleted, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );

    return notes;
};

module.exports = {addNote, deleteNote};