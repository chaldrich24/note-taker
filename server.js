const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const notes = require('./db/db.json');
const {addNote, deleteNote} = require('./lib/notes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded( {extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    const note = addNote(req.body, notes);
    res.json(note);
});

app.delete('/api/notes/:id', (req, res) => {
    const newNotes = deleteNote(req.params.id, notes);
    res.json(newNotes);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}`);
});